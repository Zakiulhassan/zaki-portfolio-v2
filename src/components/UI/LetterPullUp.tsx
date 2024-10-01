"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

interface LetterPullUpProps {
  parts: { text: string; className?: string }[]; // Array of objects for text parts
}

export function LetterPullUp({ parts }: LetterPullUpProps) {
  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05, // Delay each letter's animation by 0.05 seconds
        duration: 0.5,  // Adjust duration for smoothness
      },
    }),
  };

  return (
    <div className="w-full md:max-w-3xl mx-auto"> {/* Confines the width */}
      <div className="text-center">
        {parts.map((part, i) => (
          <span
            key={i}
            className={clsx(
              "inline-block",
              "overflow-hidden",
              "text-5xl font-bricolage font-bold tracking-tight",
              part.className
            )}
          >
            {part.text.split("").map((letter, j) => (
              <motion.span key={j} custom={j} variants={pullupVariant}
                initial="initial"
                animate="animate"
                className="inline-block">
                {letter === " " ? <span>&nbsp;</span> : letter}
              </motion.span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
