"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1] as const;
const COUNT_MS = 1500;
const SESSION_KEY = "zaki-preloader-shown";

/**
 * Splash-screen preloader: wordmark + climbing counter on a full coal panel
 * that wipes upward to reveal the hero. Runs once per browser session and
 * is skipped entirely under prefers-reduced-motion.
 */
const Preloader = () => {
  // "boot" renders a static cover for the first frame (avoids hero flash),
  // "run" plays the counter, "done" unmounts — with the wipe only after "run".
  const [phase, setPhase] = useState<"boot" | "run" | "done">("boot");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || sessionStorage.getItem(SESSION_KEY)) {
      setPhase("done");
      return;
    }
    sessionStorage.setItem(SESSION_KEY, "1");
    setPhase("run");

    document.documentElement.style.overflow = "hidden";

    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / COUNT_MS);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setPhase("done"), 350);
      }
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (phase === "done") document.documentElement.style.overflow = "";
  }, [phase]);

  const cover = (
    <div className="flex h-full flex-col justify-between px-6 py-8 sm:px-12">
      <p className="label">Portfolio — {new Date().getFullYear()}</p>

      <div className="flex items-center justify-center">
        <span className="text-display tracking-display text-[16vw] sm:text-[10vw]">
          Zaki<span className="text-acid">.</span>
        </span>
      </div>

      <div className="flex items-end justify-between">
        <p className="label">Product Designer &amp; Developer</p>
        <span className="font-mono text-5xl tabular-nums text-ink sm:text-7xl">
          {progress}
          <span className="text-acid">%</span>
        </span>
      </div>
    </div>
  );

  if (phase === "boot") {
    return <div className="fixed inset-0 z-[200] bg-coal text-ink">{cover}</div>;
  }

  return (
    <AnimatePresence>
      {phase === "run" && (
        <motion.div
          className="fixed inset-0 z-[200] bg-coal text-ink"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          {cover}
          <motion.span
            className="absolute bottom-0 left-0 h-px w-full origin-left bg-acid"
            style={{ scaleX: progress / 100 }}
            aria-hidden
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
