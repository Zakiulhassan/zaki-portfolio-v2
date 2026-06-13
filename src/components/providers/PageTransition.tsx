"use client";

import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Light-touch route transition: content fades and rises in on every
 * navigation. No curtains — clarity within the first frame matters more
 * than spectacle.
 */
const PageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
