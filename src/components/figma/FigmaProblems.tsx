"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
  const [active, setActive] = useState<number | null>(null);
  return (
    <section className="relative border-y border-[var(--border-c)]" style={{ background: "var(--surface)" }}>
      <div className="mx-auto max-w-[1440px] px-6 py-32 md:px-16 md:py-56">
        <div className="grid grid-cols-12 items-start gap-6">
          <div className="col-span-12 md:col-span-4 md:sticky md:top-32 md:self-start">
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">
              <span style={{ color: "var(--signal)" }}>04</span>
              <span className="h-px w-10 bg-[var(--border-c)]" />
              <span>Index — Where I Help</span>
            </div>
            <h2 className="h-section mt-12 text-[var(--text)]">
              Where I usually <span className="font-serif italic text-[var(--muted)]">help.</span>
            </h2>
            <p className="mt-10 max-w-xs font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">
              An index of common product issues — read by frequency, not severity.
            </p>
          </div>

          <ul className="col-span-12 md:col-span-7 md:col-start-6">
            <li className="grid grid-cols-12 items-baseline gap-4 border-t border-[var(--border-c)] pb-3 pt-3 font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">
              <span className="col-span-1">N°</span>
              <span className="col-span-7">Symptom</span>
              <span className="col-span-3">Field</span>
              <span className="col-span-1 text-right">·</span>
            </li>
            {problems.map(([p, field], i) => (
              <li
                key={p}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
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
