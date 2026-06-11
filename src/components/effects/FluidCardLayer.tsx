"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import {
  FluidCardEntry,
  subscribeFluidCardHover,
  subscribeFluidCards,
} from "./fluidCardRegistry";

// Fullscreen triangle, same pattern as FluidBackground — avoids camera/
// projection setup entirely. The card rect is passed in as a uniform and
// the fragment shader masks/positions the texture itself.
const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

// Lusion-style ripple: a radial wave displaces the texture lookup around the
// pointer, with a small chromatic-aberration split that grows with distance
// from the ripple center and eases out as uStrength settles to 0.
const fragmentShader = /* glsl */ `
  precision highp float;

  varying vec2 vUv;
  uniform sampler2D uTexture;
  uniform vec2 uMouse;
  uniform float uTime;
  uniform float uStrength;
  uniform vec4 uRect; // x, y, width, height in 0-1 screen space (y from top)

  void main() {
    vec2 screenUv = vec2(vUv.x, 1.0 - vUv.y);
    vec2 local = (screenUv - uRect.xy) / uRect.zw;

    if (local.x < 0.0 || local.x > 1.0 || local.y < 0.0 || local.y > 1.0) {
      discard;
    }

    vec2 uv = vec2(local.x, 1.0 - local.y);
    vec2 toMouse = uv - uMouse;
    float dist = length(toMouse);

    float ripple = sin(dist * 18.0 - uTime * 6.0) * 0.5 + 0.5;
    float falloff = smoothstep(0.5, 0.0, dist);
    float displace = ripple * falloff * uStrength * 0.035;

    vec2 dir = normalize(toMouse + 1e-5);
    vec2 offset = dir * displace;

    float aberration = falloff * uStrength * 0.008;
    vec2 redUv = uv + offset + dir * aberration;
    vec2 greenUv = uv + offset;
    vec2 blueUv = uv + offset - dir * aberration;

    float r = texture2D(uTexture, redUv).r;
    float g = texture2D(uTexture, greenUv).g;
    float b = texture2D(uTexture, blueUv).b;

    gl_FragColor = vec4(r, g, b, 1.0);
  }
`;

const HOVER_LERP = 0.12;

/**
 * One shared Three.js renderer for every project/case-study card's hover
 * distortion. Only the currently-hovered card gets a textured plane drawn —
 * everything else stays untouched DOM <img> — so GPU cost stays flat
 * regardless of how many cards exist on the page (avoids the per-card
 * WebGL-context exhaustion that caused the earlier white-screen bug).
 */
const FluidCardLayer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const container = containerRef.current;
    if (!container) return;

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: "high-performance",
      failIfMajorPerformanceCaveat: false,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      uniforms: {
        uTexture: { value: null },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        uTime: { value: 0 },
        uStrength: { value: 0 },
        uRect: { value: new THREE.Vector4(0, 0, 0, 0) },
      },
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    mesh.visible = false;
    scene.add(mesh);

    // Build textures from the already-decoded <img> bitmaps instead of
    // re-fetching the source via TextureLoader — re-fetching the
    // full-resolution image on first hover took several seconds and left
    // the plane blank. createImageBitmap guarantees fully-decoded pixel
    // data, avoiding texture-upload errors from an <img> mid-decode.
    const textureCache = new Map<string, THREE.Texture>();
    const pendingTextures = new Set<string>();
    const getTexture = (img: HTMLImageElement) => {
      const key = img.currentSrc || img.src;
      const cached = textureCache.get(key);
      if (cached) return cached;
      if (!pendingTextures.has(key) && img.complete && img.naturalWidth > 0) {
        pendingTextures.add(key);
        createImageBitmap(img)
          .then((bitmap) => {
            const tex = new THREE.Texture(bitmap);
            tex.colorSpace = THREE.SRGBColorSpace;
            tex.minFilter = THREE.LinearFilter;
            tex.magFilter = THREE.LinearFilter;
            tex.generateMipmaps = false;
            tex.wrapS = THREE.ClampToEdgeWrapping;
            tex.wrapT = THREE.ClampToEdgeWrapping;
            tex.needsUpdate = true;
            textureCache.set(key, tex);
          })
          .catch(() => {})
          .finally(() => pendingTextures.delete(key));
      }
      return null;
    };

    let cards = new Map<string, FluidCardEntry>();
    const unsubscribeCards = subscribeFluidCards((entries) => {
      cards = entries;
    });

    let hoveredId: string | null = null;
    let targetStrength = 0;
    const unsubscribeHover = subscribeFluidCardHover((id) => {
      hoveredId = id;
      targetStrength = id ? 1 : 0;
    });

    const targetMouse = new THREE.Vector2(0.5, 0.5);
    const onPointerMove = (e: PointerEvent) => {
      if (!hoveredId) return;
      const entry = cards.get(hoveredId);
      if (!entry) return;
      const rect = entry.el.getBoundingClientRect();
      targetMouse.set(
        (e.clientX - rect.left) / rect.width,
        1 - (e.clientY - rect.top) / rect.height
      );
    };
    window.addEventListener("pointermove", onPointerMove);

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    const clock = new THREE.Clock();
    let rafId = 0;

    const animate = () => {
      rafId = requestAnimationFrame(animate);

      material.uniforms.uTime.value = clock.getElapsedTime();
      material.uniforms.uStrength.value +=
        (targetStrength - material.uniforms.uStrength.value) * HOVER_LERP;
      material.uniforms.uMouse.value.lerp(targetMouse, 0.15);

      const strength = material.uniforms.uStrength.value;
      const entry = hoveredId ? cards.get(hoveredId) : undefined;
      const texture = entry ? getTexture(entry.img) : null;

      if (entry && strength > 0.002 && texture) {
        const rect = entry.el.getBoundingClientRect();
        material.uniforms.uTexture.value = texture;
        material.uniforms.uRect.value.set(
          rect.left / window.innerWidth,
          rect.top / window.innerHeight,
          rect.width / window.innerWidth,
          rect.height / window.innerHeight
        );
        mesh.visible = true;
        entry.img.style.opacity = "0";
      } else {
        mesh.visible = false;
        cards.forEach((c) => {
          c.img.style.opacity = "";
        });
      }

      renderer.render(scene, camera);
    };
    rafId = requestAnimationFrame(animate);

    const onContextLost = (e: Event) => {
      e.preventDefault();
      cancelAnimationFrame(rafId);
    };
    const onContextRestored = () => {
      rafId = requestAnimationFrame(animate);
    };
    renderer.domElement.addEventListener("webglcontextlost", onContextLost, false);
    renderer.domElement.addEventListener("webglcontextrestored", onContextRestored, false);

    return () => {
      cancelAnimationFrame(rafId);
      unsubscribeCards();
      unsubscribeHover();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      renderer.domElement.removeEventListener("webglcontextlost", onContextLost);
      renderer.domElement.removeEventListener("webglcontextrestored", onContextRestored);
      cards.forEach((c) => {
        c.img.style.opacity = "";
      });
      textureCache.forEach((tex) => tex.dispose());
      mesh.geometry.dispose();
      material.dispose();
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[60] hidden md:block"
      aria-hidden
    />
  );
};

export default FluidCardLayer;
