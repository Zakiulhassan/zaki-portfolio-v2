"use client";

import { useEffect, useRef } from "react";

/**
 * Custom cursor: a small dot that locks to the pointer plus a canvas-drawn
 * trailing line that eases behind it. The dot scales up over interactive
 * elements (a, button, [data-cursor="hover"]). Hidden on touch devices.
 */
const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const canvas = canvasRef.current;
    const dot = dotRef.current;
    if (!canvas || !dot) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };
    resize();
    window.addEventListener("resize", resize);

    const mouse = { x: -100, y: -100 };
    const TRAIL_LENGTH = 28;
    const points: { x: number; y: number }[] = [];
    let hovering = false;
    let visible = false;

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!visible) {
        visible = true;
        for (let i = 0; i < TRAIL_LENGTH; i++) points.push({ ...mouse });
      }
      const target = e.target as HTMLElement;
      hovering = !!target.closest("a, button, [data-cursor='hover']");
    };
    window.addEventListener("mousemove", onMove);

    const onLeave = () => {
      visible = false;
      points.length = 0;
    };
    document.documentElement.addEventListener("mouseleave", onLeave);

    let rafId = 0;
    const head = { x: -100, y: -100 };

    const render = () => {
      rafId = requestAnimationFrame(render);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!visible) {
        dot.style.opacity = "0";
        return;
      }

      // Head eases toward the real pointer; trail points chase each other.
      head.x += (mouse.x - head.x) * 0.55;
      head.y += (mouse.y - head.y) * 0.55;

      points[0].x += (head.x - points[0].x) * 0.9;
      points[0].y += (head.y - points[0].y) * 0.9;
      for (let i = 1; i < points.length; i++) {
        points[i].x += (points[i - 1].x - points[i].x) * 0.42;
        points[i].y += (points[i - 1].y - points[i].y) * 0.42;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      for (let i = 1; i < points.length; i++) {
        const t = 1 - i / points.length;
        ctx.beginPath();
        ctx.moveTo(points[i - 1].x, points[i - 1].y);
        ctx.lineTo(points[i].x, points[i].y);
        ctx.strokeStyle = `rgba(198, 254, 30, ${0.55 * t})`;
        ctx.lineWidth = 1.5 * t + 0.3;
        ctx.stroke();
      }
      ctx.restore();

      dot.style.opacity = "1";
      dot.style.transform = `translate(${mouse.x}px, ${mouse.y}px) translate(-50%, -50%) scale(${hovering ? 2.6 : 1})`;
    };
    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[99] hidden md:block"
        aria-hidden
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-2 w-2 rounded-full bg-greenPri opacity-0 mix-blend-difference transition-[transform] duration-200 ease-out md:block"
        aria-hidden
      />
    </>
  );
};

export default CursorTrail;
