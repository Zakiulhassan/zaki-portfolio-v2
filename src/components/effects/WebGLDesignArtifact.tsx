"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const INK = "244, 244, 239";
const ACID = "198, 254, 30";

type CardKind = "grid" | "type" | "dots" | "wire";

interface CardDef {
  kind: CardKind;
  label: string;
  /** fractional position within the viewport, -0.5..0.5 from center */
  x: number;
  y: number;
  /** plane size in px at a 1280px-wide viewport */
  w: number;
  h: number;
  /** base rotation in degrees */
  rot: number;
  /** parallax depth, 0..1 — higher drifts more with cursor/scroll */
  depth: number;
}

const CARDS: CardDef[] = [
  { kind: "grid", label: "GRID / 12-COL", x: -0.36, y: 0.24, w: 230, h: 160, rot: -4, depth: 0.6 },
  { kind: "type", label: "DISPLAY / SERIF", x: 0.34, y: 0.3, w: 200, h: 150, rot: 3, depth: 1 },
  { kind: "dots", label: "SIGNAL", x: -0.32, y: -0.3, w: 180, h: 180, rot: 5, depth: 0.4 },
  { kind: "wire", label: "UI / WIREFRAME", x: 0.36, y: -0.26, w: 240, h: 170, rot: -3, depth: 0.8 },
];

function drawCard(kind: CardKind, label: string): HTMLCanvasElement {
  const W = 512;
  const H = 384;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas;

  ctx.clearRect(0, 0, W, H);

  // Frame
  ctx.strokeStyle = `rgba(${INK}, 0.22)`;
  ctx.lineWidth = 2;
  ctx.strokeRect(8, 8, W - 16, H - 16);

  if (kind === "grid") {
    ctx.strokeStyle = `rgba(${INK}, 0.16)`;
    ctx.lineWidth = 1;
    const cols = 6;
    const rows = 4;
    for (let i = 1; i < cols; i++) {
      const x = (W / cols) * i;
      ctx.beginPath();
      ctx.moveTo(x, 8);
      ctx.lineTo(x, H - 8);
      ctx.stroke();
    }
    for (let i = 1; i < rows; i++) {
      const y = (H / rows) * i;
      ctx.beginPath();
      ctx.moveTo(8, y);
      ctx.lineTo(W - 8, y);
      ctx.stroke();
    }
    ctx.fillStyle = `rgba(${ACID}, 0.9)`;
    ctx.fillRect((W / cols) * 2, (H / rows) * 1, W / cols, H / rows);
  } else if (kind === "type") {
    ctx.fillStyle = `rgba(${INK}, 0.92)`;
    ctx.font = "italic 220px Georgia, serif";
    ctx.textBaseline = "middle";
    ctx.fillText("Aa", 70, H / 2 + 10);
    ctx.fillStyle = `rgba(${ACID}, 0.9)`;
    ctx.beginPath();
    ctx.arc(W - 64, 64, 9, 0, Math.PI * 2);
    ctx.fill();
  } else if (kind === "dots") {
    const cols = 6;
    const rows = 6;
    const pad = 56;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = pad + (c * (W - pad * 2)) / (cols - 1);
        const y = pad + (r * (H - pad * 2)) / (rows - 1);
        const isAccent = r === 2 && c === 3;
        ctx.fillStyle = isAccent
          ? `rgba(${ACID}, 0.95)`
          : `rgba(${INK}, ${0.12 + ((r + c) % 3) * 0.05})`;
        ctx.beginPath();
        ctx.arc(x, y, isAccent ? 9 : 4, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  } else if (kind === "wire") {
    ctx.strokeStyle = `rgba(${INK}, 0.2)`;
    ctx.lineWidth = 1.5;
    // header bar
    ctx.strokeRect(28, 28, W - 56, 44);
    // sidebar
    ctx.strokeRect(28, 88, 110, H - 116);
    // content blocks
    ctx.strokeRect(154, 88, W - 182, 70);
    ctx.strokeRect(154, 174, W - 182, 70);
    ctx.fillStyle = `rgba(${ACID}, 0.85)`;
    ctx.fillRect(154, 260, 90, 24);
  }

  // Label
  ctx.fillStyle = `rgba(${INK}, 0.55)`;
  ctx.font = "600 22px 'JetBrains Mono', monospace";
  ctx.textBaseline = "alphabetic";
  ctx.fillText(label, 28, H - 28);

  return canvas;
}

/**
 * Cursor-reactive WebGL artifact: a constellation of UI-fragment cards
 * (grid, typography, signal dots, wireframe) orbiting the portrait. Tilts
 * and drifts with the pointer (max ~10px / 6deg) and settles toward the
 * frame as the section scrolls past. Static and motionless when reduced
 * motion is requested.
 */
const WebGLDesignArtifact = ({ targetRef }: { targetRef: React.RefObject<HTMLElement> }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    const host = targetRef.current;
    if (!mount || !host) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 5;

    const loader = new THREE.TextureLoader();
    const meshes = CARDS.map((def) => {
      const tex = new THREE.CanvasTexture(drawCard(def.kind, def.label));
      tex.colorSpace = THREE.SRGBColorSpace;
      const geo = new THREE.PlaneGeometry(1, 1);
      const mat = new THREE.MeshBasicMaterial({
        map: tex,
        transparent: true,
        opacity: 0,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.z = (def.rot * Math.PI) / 180;
      scene.add(mesh);
      return mesh;
    });

    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = mount.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      renderer.setSize(width, height);
      camera.left = -width / 2;
      camera.right = width / 2;
      camera.top = height / 2;
      camera.bottom = -height / 2;
      camera.updateProjectionMatrix();

      const scale = width / 1280;
      meshes.forEach((mesh, i) => {
        const def = CARDS[i];
        mesh.scale.set(def.w * scale, (def.h * (384 / 512)) * scale, 1);
        mesh.userData.baseX = def.x * width;
        mesh.userData.baseY = def.y * height;
        mesh.position.x = mesh.userData.baseX;
        mesh.position.y = mesh.userData.baseY;
      });
    };

    resize();
    void loader; // textures are canvas-generated, loader kept for parity/future use

    let mouseX = 0;
    let mouseY = 0;
    let scrollT = 0;

    const onPointerMove = (e: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    };

    const onScroll = () => {
      const rect = host.getBoundingClientRect();
      const total = rect.height + window.innerHeight;
      const progress = (window.innerHeight - rect.top) / total;
      scrollT = Math.min(1, Math.max(0, progress));
    };

    const ro = new ResizeObserver(resize);
    ro.observe(mount);
    if (finePointer) host.addEventListener("pointermove", onPointerMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    let raf = 0;
    const render = (fadeOnly = false) => {
      meshes.forEach((mesh, i) => {
        const def = CARDS[i];
        const mat = mesh.material as THREE.MeshBasicMaterial;
        mat.opacity += (0.85 - mat.opacity) * 0.08;

        if (fadeOnly) return;

        // scroll: cards drift slightly outward as the hero scrolls past
        const spread = 1 + scrollT * 0.18;
        const targetX =
          mesh.userData.baseX * spread + mouseX * 16 * def.depth;
        const targetY =
          mesh.userData.baseY * spread - mouseY * 16 * def.depth;
        mesh.position.x += (targetX - mesh.position.x) * 0.06;
        mesh.position.y += (targetY - mesh.position.y) * 0.06;

        const targetRot =
          (def.rot * Math.PI) / 180 +
          mouseX * 0.06 * def.depth -
          scrollT * 0.05 * def.depth;
        mesh.rotation.z += (targetRot - mesh.rotation.z) * 0.06;
      });
      renderer.render(scene, camera);
    };

    if (reducedMotion) {
      meshes.forEach((mesh) => {
        (mesh.material as THREE.MeshBasicMaterial).opacity = 0.85;
      });
      render(true);
    } else {
      const loop = () => {
        render();
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      host.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      meshes.forEach((mesh) => {
        mesh.geometry.dispose();
        (mesh.material as THREE.MeshBasicMaterial).map?.dispose();
        (mesh.material as THREE.MeshBasicMaterial).dispose();
      });
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [targetRef]);

  return (
    <div
      ref={mountRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 hidden sm:block [&>canvas]:!h-full [&>canvas]:!w-full"
    />
  );
};

export default WebGLDesignArtifact;
