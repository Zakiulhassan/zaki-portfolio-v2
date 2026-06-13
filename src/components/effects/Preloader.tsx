"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1] as const;
const COUNT_S = 1.6;
const REVEAL_S = 1.1;
const SESSION_KEY = "zaki-preloader-shown";

const WORD = "Hassan".split("");

/**
 * Splash-screen preloader: a full-screen cover with a counter that climbs
 * smoothly to 100%, then the whole cover slides up to reveal the hero.
 *
 * The count is driven by a framer-motion motion value (animated on the
 * compositor, read back only to update the printed integer) so the bar and
 * number stay buttery even while the page hydrates underneath — no per-frame
 * React re-render of the tree, and a steady ease so it never crawls or stalls
 * near 100. Runs once per browser session, skipped under reduced-motion.
 */
const Preloader = () => {
  // "boot" paints a static cover on the first frame (no hero flash),
  // "run" plays the counter, "exit" slides the cover away, "done" unmounts.
  const [phase, setPhase] = useState<"boot" | "run" | "exit" | "done">("boot");
  const [display, setDisplay] = useState(0);

  const count = useMotionValue(0);
  const scaleX = useTransform(count, [0, 100], [0, 1]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || sessionStorage.getItem(SESSION_KEY)) {
      setPhase("done");
      return;
    }
    sessionStorage.setItem(SESSION_KEY, "1");
    setPhase("run");
    document.documentElement.style.overflow = "hidden";

    const unsub = count.on("change", (v) => setDisplay(Math.round(v)));
    const controls = animate(count, 100, {
      duration: COUNT_S,
      ease: [0.45, 0, 0.15, 1],
      onComplete: () => {
        // Short, deliberate beat at 100% — then reveal.
        window.setTimeout(() => setPhase("exit"), 180);
      },
    });

    return () => {
      controls.stop();
      unsub();
    };
  }, [count]);

  useEffect(() => {
    if (phase !== "exit") return;
    const timer = window.setTimeout(() => {
      setPhase("done");
      document.documentElement.style.overflow = "";
    }, REVEAL_S * 1000);
    return () => window.clearTimeout(timer);
  }, [phase]);

  if (phase === "done") return null;

  const year = new Date().getFullYear();

  return (
    // Decorative splash — hidden from AT/crawlers.
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 z-[200] flex flex-col justify-between overflow-hidden bg-coal px-6 py-8 text-ink sm:px-12 sm:py-10"
      initial={{ y: 0 }}
      animate={{ y: phase === "exit" ? "-101%" : 0 }}
      transition={{ duration: REVEAL_S, ease: EASE }}
    >
      {/* Top meta row */}
      <motion.div
        className="flex items-start justify-between"
        animate={{ opacity: phase === "exit" ? 0 : 1 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <span className="label">Zaki Ul Hassan</span>
        <span className="label">Portfolio © {year}</span>
      </motion.div>

      {/* Centered wordmark — letters stagger up into place */}
      <motion.div
        className="pointer-events-none flex flex-1 items-center justify-center"
        animate={{ opacity: phase === "exit" ? 0 : 1, y: phase === "exit" ? -24 : 0 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <span className="text-display tracking-display flex overflow-hidden text-[15vw] leading-[0.9] sm:text-[8vw]">
          {WORD.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.8, delay: 0.06 * i, ease: EASE }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.8, delay: 0.06 * WORD.length, ease: EASE }}
            className="inline-block text-acid"
          >
            .
          </motion.span>
        </span>
      </motion.div>

      {/* Bottom: live counter + a thin progress rule that fills with it */}
      <motion.div
        animate={{ opacity: phase === "exit" ? 0 : 1 }}
        transition={{ duration: 0.4, ease: EASE }}
      >
        <div className="mb-3 flex items-end justify-between">
          <span className="label">Loading experience</span>
          <span className="font-mono text-5xl tabular-nums leading-none sm:text-7xl">
            {String(display).padStart(2, "0")}
            <span className="text-acid">%</span>
          </span>
        </div>
        <div className="h-px w-full bg-line700">
          <motion.div className="h-full origin-left bg-acid" style={{ scaleX }} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
