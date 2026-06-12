"use client";

import { ReactNode, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

/**
 * Scene-to-scene scroll transition: the wrapped section eases in from a
 * slight scale/opacity recess as it enters the viewport, settling to rest
 * by the time it owns the screen. Subtle by design — the seam between
 * scenes should be felt, not watched. Inert under reduced motion.
 */
const ScrollSceneTransition = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 35%"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [0.975, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [0.6, 1]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ scale, opacity }}>{children}</motion.div>
    </div>
  );
};

export default ScrollSceneTransition;
