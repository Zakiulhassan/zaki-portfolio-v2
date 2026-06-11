"use client";

import Image from "next/image";
import { HTMLAttributes, useEffect, useId, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  registerFluidCard,
  setFluidCardHover,
} from "../effects/fluidCardRegistry";

interface FluidImageProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  /** classes for the clipping frame (size/aspect/border live here) */
  className?: string;
  priority?: boolean;
  sizes?: string;
}

/**
 * ParallaxImage plus a Lusion-style WebGL ripple-distortion overlay on
 * hover, driven by the single shared FluidCardLayer renderer. The <img>
 * itself keeps the existing scroll-drift + zoom treatment; on hover its
 * opacity is handed over to the layer, which fades in a textured plane with
 * the displacement shader and fades it back out on pointer-leave.
 */
const FluidImage = ({
  src,
  alt,
  className = "",
  priority = false,
  sizes,
  ...rest
}: FluidImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const id = useId();
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

  useEffect(() => {
    const el = ref.current;
    const img = imgRef.current;
    if (!el || !img) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    return registerFluidCard({ id, el, img });
  }, [id]);

  const onPointerEnter = () => setFluidCardHover(id);
  const onPointerLeave = () => setFluidCardHover(null);

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden ${className}`}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      {...rest}
    >
      <motion.div style={{ y }} className="absolute -inset-[8%]">
        <Image
          ref={imgRef}
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition-[transform,opacity] duration-slow ease-brand group-hover:scale-[1.06]"
        />
      </motion.div>
    </div>
  );
};

export default FluidImage;
