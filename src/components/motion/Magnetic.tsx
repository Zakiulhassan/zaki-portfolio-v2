"use client";

import { ReactNode, useRef } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Magnetic hover: the child gently follows the cursor while hovered and
 * eases back to rest on leave. Ease-out tween only, no spring physics.
 */
const Magnetic = ({
  children,
  strength = 0.35,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Cache the bounding rect once on enter — calling getBoundingClientRect on
  // every mousemove forces a synchronous layout and is the main cause of
  // hover jank on fixed-position elements (header/footer).
  const onMouseEnter = () => {
    rectRef.current = ref.current?.getBoundingClientRect() ?? null;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = rectRef.current;
    if (!rect) return;
    const targetX = (e.clientX - rect.left - rect.width / 2) * strength;
    const targetY = (e.clientY - rect.top - rect.height / 2) * strength;
    animate(x, targetX, { type: "tween", ease: EASE, duration: 0.3 });
    animate(y, targetY, { type: "tween", ease: EASE, duration: 0.3 });
  };

  const onMouseLeave = () => {
    rectRef.current = null;
    animate(x, 0, { type: "tween", ease: EASE, duration: 0.3 });
    animate(y, 0, { type: "tween", ease: EASE, duration: 0.3 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x, y }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
