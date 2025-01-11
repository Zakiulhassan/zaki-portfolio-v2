"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

interface LetterPullUpCenterProps {
  parts: { text: string; className?: string }[]; // Array of objects for text parts
}

export function LetterPullUpCenter({ parts }: LetterPullUpCenterProps) {
  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="w-full flex justify-center"> {/* Centering container */}
      <div className="text-center"> {/* Centering text */}
        {parts.map((part, i) => (
          <span
            key={i}
            className={clsx(
              "inline-block",
              "overflow-hidden",
              "text-3xl md:text-[40px] leading-tight font-medium tracking-tight",
              part.className
            )}
          >
            {part.text.split("").map((letter, j) => (
              <motion.span
                key={j}
                custom={j}
                variants={pullupVariant}
                initial="initial"
                animate="animate"
                className="inline-block"
              >
                {letter === " " ? <span>&nbsp;</span> : letter}
              </motion.span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
