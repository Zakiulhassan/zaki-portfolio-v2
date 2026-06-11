"use client";

import Image from "next/image";
import { HTMLAttributes, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

interface ParallaxImageProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  /** classes for the clipping frame (size/aspect/border live here) */
  className?: string;
  priority?: boolean;
  sizes?: string;
}

/**
 * Image inside an overflow-hidden frame: the image is oversized (~116%) and
 * drifts vertically as the frame crosses the viewport, plus a slow zoom on
 * hover. The obsidian-style "living image" treatment.
 */
const ParallaxImage = ({
  src,
  alt,
  className = "",
  priority = false,
  sizes,
  ...rest
}: ParallaxImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? ["0%", "0%"] : ["-8%", "8%"]
  );

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden ${className}`}
      {...rest}
    >
      <motion.div style={{ y }} className="absolute -inset-[8%]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition-transform duration-slow ease-brand group-hover:scale-[1.06]"
        />
      </motion.div>
    </div>
  );
};

export default ParallaxImage;
