"use client";

import { useEffect, useRef } from "react";

/**
 * The rail's hairline rule (`.tick`) that draws itself in left-to-right the
 * first time it scrolls into view.
 */
const RevealTick = () => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("tick-in");
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return <span ref={ref} className="tick tick-draw" />;
};

export default RevealTick;
