"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const EASE = [0.6, 0.01, 0.05, 1] as const;

const problems = [
  ["Unclear product flows", "Flow / Architecture"],
  ["Confusing dashboards", "Dashboard / UX"],
  ["Weak website structure", "Website / IA"],
  ["Inconsistent UI systems", "System / Tokens"],
  ["Messy design files", "Files / Handoff"],
  ["Poor mobile experience", "Mobile / Responsive"],
  ["Interfaces that look unfinished", "Visual / Polish"],
  ["Designs that are hard to hand off", "Handoff / Engineering"],
];

export function FigmaProblems() {
  const [hovered, setHovered] = useState<number | null>(null);
  const railRef = useRef<HTMLUListElement>(null);
  const { scrollYProgress } = useScroll({ target: railRef, offset: ["start center", "end center"] });
  const barWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [scrollIndex, setScrollIndex] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(problems.length - 1, Math.max(0, Math.floor(v * problems.length)));
    setScrollIndex(idx);
  });

  const active = hovered ?? scrollIndex;

  return (
    <section className="relative border-y border-[var(--border-c)]" style={{ background: "var(--surface)" }}>
      <div className="mx-auto max-w-[1440px] px-6 py-32 md:px-16 md:py-56">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4 md:sticky md:top-32 md:self-start">
            <h2 className="h-section text-[var(--text)]">
              Where I usually <span className="font-serif italic text-[var(--muted)]">help.</span>
            </h2>
            <p className="mt-10 max-w-xs font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">
              An index of common product issues — read by frequency, not severity.
            </p>

            {/* Scroll-driven progress readout */}
            <div className="mt-16 hidden md:block">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[clamp(40px,5vw,72px)] leading-none tracking-tight text-[var(--text)]">
                  {String(active + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">
                  / {String(problems.length).padStart(2, "0")}
                </span>
              </div>
              <div className="relative mt-6 h-px w-full bg-[var(--border-c)]">
                <motion.div
                  className="absolute left-0 top-0 h-px"
                  style={{ background: "var(--signal)", width: barWidth }}
                />
              </div>
              <motion.p
                key={active}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="mt-4 text-[18px] tracking-tight text-[var(--text)]"
              >
                {problems[active][0]}
              </motion.p>
            </div>
          </div>

          <ul ref={railRef} className="col-span-12 md:col-span-7 md:col-start-6">
            <li className="grid grid-cols-12 items-baseline gap-4 border-t border-[var(--border-c)] pb-3 pt-3 font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">
              <span className="col-span-1">N°</span>
              <span className="col-span-7">Symptom</span>
              <span className="col-span-3">Field</span>
              <span className="col-span-1 text-right">·</span>
            </li>
            {problems.map(([p, field], i) => (
              <li
                key={p}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="group relative grid cursor-default grid-cols-12 items-baseline gap-4 border-t border-[var(--border-c)] py-7 md:py-8"
              >
                <span className="col-span-1 font-mono text-[11px] tracking-[0.22em] text-[var(--muted)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <motion.span
                  animate={{ x: active === i ? 8 : 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="col-span-7 text-[clamp(20px,2.4vw,32px)] tracking-tight"
                  style={{ color: active === i ? "var(--text)" : "var(--muted)" }}
                >
                  {p}
                </motion.span>
                <span className="col-span-3 font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">
                  {field}
                </span>
                <span className="col-span-1 flex justify-end">
                  <motion.span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: "var(--signal)" }}
                    animate={{ scale: active === i ? 1 : 0, opacity: active === i ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </span>
              </li>
            ))}
            <li className="border-t border-[var(--border-c)]" />
          </ul>
        </div>
      </div>
    </section>
  );
}
