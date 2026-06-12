"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

interface PreviewItem {
  key: string;
  src: string;
}

/**
 * Floating preview frame that trails the cursor over a hovered index row,
 * labelled with a call to action. Pointer devices only; rendered in a
 * portal because ancestors keep will-change/transform from page motion,
 * which would otherwise hijack position:fixed.
 *
 * Returns `onMouseMove` for the host list to spread onto its container.
 */
export const useCursorPreview = () => {
  const [finePointer, setFinePointer] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 120, damping: 20, mass: 0.4 });
  const y = useSpring(my, { stiffness: 120, damping: 20, mass: 0.4 });

  useEffect(() => {
    setFinePointer(window.matchMedia("(pointer: fine)").matches);
  }, []);

  const onMouseMove = (e: React.MouseEvent) => {
    mx.set(e.clientX + 28);
    my.set(e.clientY - 110);
  };

  return { finePointer, x, y, onMouseMove };
};

const CursorProjectPreview = ({
  items,
  active,
  label = "View case",
  finePointer,
  x,
  y,
}: {
  items: PreviewItem[];
  active: number | null;
  label?: string;
  finePointer: boolean;
  x: ReturnType<typeof useSpring>;
  y: ReturnType<typeof useSpring>;
}) => {
  if (!finePointer) return null;

  return createPortal(
    <AnimatePresence>
      {active !== null && (
        <motion.div
          key="preview"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
          style={{ x, y }}
          className="pointer-events-none fixed left-0 top-0 z-[80] hidden lg:block"
        >
          <div className="relative aspect-[4/3] w-[320px] overflow-hidden rounded border border-line700 bg-coal-soft">
            {items.map((item, i) => (
              <Image
                key={item.key}
                src={item.src}
                alt=""
                fill
                sizes="320px"
                className={`object-cover object-top transition-opacity duration-base ease-brand ${
                  active === i ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <span className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-coal/85 px-3 py-1.5 backdrop-blur-sm">
              <span className="inline-block h-1 w-1 rounded-full bg-acid" aria-hidden />
              <span className="label !text-ink">{label}</span>
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default CursorProjectPreview;
