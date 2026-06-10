"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/** Scroll parallax wrapper: child drifts vertically as it crosses the viewport. */
const Parallax = ({
  children,
  amount = 80,
  className = "",
}: {
  children: ReactNode;
  /** total drift in px (positive = moves up while scrolling down) */
  amount?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
};

export default Parallax;
