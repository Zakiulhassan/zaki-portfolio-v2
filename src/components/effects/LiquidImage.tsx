"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import Image from "next/image";

/**
 * LiquidImage — shows the portrait normally, then crossfades in a WebGL
 * canvas rendering the same image once its texture is ready. On hover the
 * shader applies a slow simplex-noise flow plus a gentle lens warp that
 * follows the pointer — a calm "liquid glass" feel, no RGB split or glitch.
 * At rest (uHover = 0) the shader output is pixel-identical to the plain
 * image, so the crossfade is invisible and there's never a black/garbage
 * frame.
 */

const VERTEX = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy * 2.0, 0.0, 1.0);
  }
`;

const FRAGMENT = /* glsl */ `
  precision highp float;

  varying vec2 vUv;
  uniform sampler2D uTexture;
  uniform float uTime;
  uniform float uHover;
  uniform vec2 uMouse;
  uniform vec2 uPlaneSize;
  uniform vec2 uImageSize;

  // Ashima simplex noise (3D)
  vec4 permute(vec4 x){ return mod(((x * 34.0) + 1.0) * x, 289.0); }
  vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }
  float snoise(vec3 v){
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod(i, 289.0);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 1.0 / 7.0;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
  }

  // Cover-fit the texture: centred on x, anchored to the top on y (object-top).
  vec2 coverUv(vec2 uv, vec2 planeSize, vec2 imageSize){
    float planeAspect = planeSize.x / planeSize.y;
    float imageAspect = imageSize.x / imageSize.y;
    vec2 ratio = vec2(
      min(planeAspect / imageAspect, 1.0),
      min(imageAspect / planeAspect, 1.0)
    );
    return vec2(
      uv.x * ratio.x + (1.0 - ratio.x) * 0.5,
      uv.y * ratio.y + (1.0 - ratio.y)
    );
  }

  void main(){
    vec2 uv = vUv;
    float amp = uHover;

    // Slow ambient flow — the body of the liquid.
    float t = uTime * 0.1;
    vec2 flow = vec2(
      snoise(vec3(uv * 1.6, t)),
      snoise(vec3(uv * 1.6 + 9.0, t))
    ) * 0.006;

    // Gentle lens warp following the pointer.
    vec2 toMouse = uv - uMouse;
    float dist = length(toMouse);
    float lens = smoothstep(0.4, 0.0, dist);
    vec2 lensWarp = toMouse * lens * 0.12;

    vec2 disp = (flow + lensWarp) * amp;

    vec2 cuv = coverUv(uv - disp, uPlaneSize, uImageSize);
    vec3 color = texture2D(uTexture, cuv).rgb;

    // Match the CSS look: grayscale-[20%] contrast-110.
    float gray = dot(color, vec3(0.299, 0.587, 0.114));
    color = mix(color, vec3(gray), 0.2);
    color = (color - 0.5) * 1.1 + 0.5;

    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function LiquidImage({
  src,
  alt,
  sizes,
  className = "",
}: {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvasWrap = canvasWrapRef.current;
    if (!container || !canvasWrap) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    const canvas = renderer.domElement;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    canvasWrap.appendChild(canvas);

    const scene = new THREE.Scene();
    const camera = new THREE.Camera();

    const uniforms = {
      uTexture: { value: null as THREE.Texture | null },
      uTime: { value: 0 },
      uHover: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uPlaneSize: { value: new THREE.Vector2(1, 1) },
      uImageSize: { value: new THREE.Vector2(1, 1) },
    };

    const geometry = new THREE.PlaneGeometry(1, 1);
    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX,
      fragmentShader: FRAGMENT,
      uniforms,
      transparent: true,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const setSize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      renderer.setSize(w, h, false);
      uniforms.uPlaneSize.value.set(w, h);
    };

    let hoverTarget = 0;
    const mouseTarget = new THREE.Vector2(0.5, 0.5);
    const onEnter = () => (hoverTarget = 1);
    const onLeave = () => (hoverTarget = 0);
    const onMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      mouseTarget.set(
        (e.clientX - rect.left) / rect.width,
        1 - (e.clientY - rect.top) / rect.height
      );
    };

    const clock = new THREE.Clock();
    let rafId = 0;
    const render = () => {
      rafId = requestAnimationFrame(render);
      uniforms.uTime.value += clock.getDelta();
      uniforms.uHover.value += (hoverTarget - uniforms.uHover.value) * 0.06;
      uniforms.uMouse.value.x += (mouseTarget.x - uniforms.uMouse.value.x) * 0.08;
      uniforms.uMouse.value.y += (mouseTarget.y - uniforms.uMouse.value.y) * 0.08;
      renderer.render(scene, camera);
    };

    let ro: ResizeObserver | undefined;

    const loader = new THREE.TextureLoader();
    loader.load(
      src,
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.generateMipmaps = false;
        uniforms.uTexture.value = texture;
        uniforms.uImageSize.value.set(texture.image.width, texture.image.height);

        setSize();
        ro = new ResizeObserver(setSize);
        ro.observe(container);

        container.addEventListener("pointerenter", onEnter);
        container.addEventListener("pointerleave", onLeave);
        container.addEventListener("pointermove", onMove);

        rafId = requestAnimationFrame(render);
        // Crossfade in once the first frame is ready.
        requestAnimationFrame(() => {
          canvasWrap.style.opacity = "1";
        });
      },
      undefined,
      () => {
        /* keep showing the plain <Image> on load failure */
      }
    );

    return () => {
      cancelAnimationFrame(rafId);
      ro?.disconnect();
      container.removeEventListener("pointerenter", onEnter);
      container.removeEventListener("pointerleave", onLeave);
      container.removeEventListener("pointermove", onMove);
      uniforms.uTexture.value?.dispose();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (canvas.parentNode === canvasWrap) canvasWrap.removeChild(canvas);
    };
  }, [src]);

  return (
    <div ref={containerRef} className={`relative h-full w-full ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes={sizes}
        className="object-cover object-top grayscale-[20%] contrast-110"
      />
      <div
        ref={canvasWrapRef}
        className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-out"
        aria-hidden
      />
    </div>
  );
}
