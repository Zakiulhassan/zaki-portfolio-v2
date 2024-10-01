"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeDownProps {
  children: ReactNode; // Accepts any valid React element(s)
  className?: string;  // Optional class for custom styling
}

export function FadeDown({ children, className }: FadeDownProps) {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 }, // Starts slightly above and transparent
    show: {
      opacity: 1, 
      y: 0,                          // Moves down to original position
      transition: { type: "spring", stiffness: 300, damping: 20 }, // Spring animation for smoothness
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }} // Trigger animation only once when in the viewport
      variants={{
        hidden: {},             // No need for child animation at the div level
        show: {
          transition: {
            staggerChildren: 0.1,  // Stagger effect if multiple children exist
          },
        },
      }}
      className={clsx("w-full", className)} // Allow optional className for styling
    >
      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
        {children}
      </motion.div>
    </motion.div>
  );
}
