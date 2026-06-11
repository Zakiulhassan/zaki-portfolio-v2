"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/**
 * Number that counts up from 0 to `value` the first time it scrolls into
 * view. Ease-out, ~1s, once.
 */
const CountUp = ({
  value,
  prefix = "",
  suffix = "",
  duration = 1,
  className = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return;
    if (reduced) {
      el.textContent = `${prefix}${value}${suffix}`;
      return;
    }
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        el.textContent = `${prefix}${Math.round(latest)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, value, prefix, suffix, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
};

export default CountUp;
