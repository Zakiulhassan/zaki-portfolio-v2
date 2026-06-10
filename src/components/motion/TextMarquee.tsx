"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Infinite text marquee whose speed and direction react to scroll velocity —
 * the oversized strip seen on modern studio sites.
 */
const TextMarquee = ({
  children,
  baseSpeed = 60,
  direction = 1,
  className = "",
}: {
  children: ReactNode;
  /** pixels per second at rest */
  baseSpeed?: number;
  direction?: 1 | -1;
  className?: string;
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const tracks = wrap.querySelectorAll<HTMLElement>("[data-track]");
    if (!tracks.length) return;

    let pos = 0;
    let velocityBoost = 0;
    const trackWidth = () => tracks[0].offsetWidth;

    const st = ScrollTrigger.create({
      onUpdate: (self) => {
        velocityBoost = self.getVelocity() / 250;
      },
    });

    const tick = (_t: number, deltaMs: number) => {
      const dt = deltaMs / 1000;
      const speed = baseSpeed * direction + velocityBoost * direction * 40;
      pos -= speed * dt;
      velocityBoost *= 0.92;
      const w = trackWidth();
      if (w > 0) {
        // keep pos within [-w, 0] for seamless wrap
        pos = ((pos % w) + w) % w * -1;
      }
      tracks.forEach((track) => {
        track.style.transform = `translateX(${pos}px)`;
      });
    };
    gsap.ticker.add(tick);

    return () => {
      gsap.ticker.remove(tick);
      st.kill();
    };
  }, [baseSpeed, direction]);

  return (
    <div ref={wrapRef} className={`flex overflow-hidden whitespace-nowrap ${className}`}>
      {[0, 1, 2].map((i) => (
        <div key={i} data-track className="flex shrink-0 will-change-transform" aria-hidden={i > 0}>
          {children}
        </div>
      ))}
    </div>
  );
};

export default TextMarquee;
