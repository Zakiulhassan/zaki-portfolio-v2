"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1] as const;
const COUNT_MS = 1600;
const SESSION_KEY = "zaki-preloader-shown";

const LETTERS = "Zaki".split("");

/**
 * Splash-screen preloader: a centered wordmark counts up to 100%, then two
 * panels split apart horizontally to reveal the hero beneath. Runs once per
 * browser session and is skipped entirely under prefers-reduced-motion.
 */
const Preloader = () => {
  // "boot" renders a static cover for the first frame (avoids hero flash),
  // "run" plays the counter, "exit" splits the panels, "done" unmounts.
  const [phase, setPhase] = useState<"boot" | "run" | "exit" | "done">("boot");
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
        setTimeout(() => setPhase("exit"), 250);
      }
    };
    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (phase !== "exit") return;
    const timer = setTimeout(() => {
      setPhase("done");
      document.documentElement.style.overflow = "";
    }, 1000);
    return () => clearTimeout(timer);
  }, [phase]);

  if (phase === "done") return null;

  return (
    // Decorative splash: hidden from AT/crawlers so the staggered wordmark
    // letters never read as "Z a k i".
    <div aria-hidden="true" className="fixed inset-0 z-[200] overflow-hidden text-ink">
          {/* Left panel */}
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-coal"
            animate={{ x: phase === "exit" ? "-100%" : 0 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <p className="absolute left-6 top-8 label sm:left-12 sm:top-10">
              Portfolio — {new Date().getFullYear()}
            </p>
            <span className="absolute bottom-8 left-6 font-mono text-4xl tabular-nums text-ink sm:bottom-10 sm:left-12 sm:text-6xl">
              {progress}
              <span className="text-acid">%</span>
            </span>
          </motion.div>

          {/* Right panel */}
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 bg-coal"
            animate={{ x: phase === "exit" ? "100%" : 0 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <p className="absolute right-6 top-8 label text-right sm:right-12 sm:top-10">
              Product Designer &amp; Developer
            </p>
            <div className="absolute bottom-8 right-6 flex flex-col items-end gap-2 sm:bottom-10 sm:right-12">
              <span className="label">Loading</span>
              <span className="block h-px w-32 bg-line700 sm:w-48">
                <motion.span
                  className="block h-full origin-left bg-acid"
                  style={{ scaleX: progress / 100 }}
                />
              </span>
            </div>
          </motion.div>

          {/* Centered wordmark, letters stagger in then fade just before
              the panels split. */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
            animate={{ opacity: phase === "exit" ? 0 : 1 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <span className="text-display tracking-display flex text-[16vw] sm:text-[9vw]">
              {LETTERS.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: "60%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  transition={{ duration: 0.7, delay: 0.08 * i, ease: EASE }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.08 * LETTERS.length, ease: EASE }}
                className="inline-block text-acid"
              >
                .
              </motion.span>
            </span>
          </motion.div>
    </div>
  );
};

export default Preloader;
