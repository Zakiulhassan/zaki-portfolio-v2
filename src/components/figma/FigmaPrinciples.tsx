"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const EASE = [0.6, 0.01, 0.05, 1] as const;

const principles = [
  ["01", "Clarity before decoration", "Every element earns its place by helping the user understand or act."],
  ["02", "Systems before isolated screens", "Tokens, components, and patterns that hold up across teams."],
  ["03", "Motion should explain, not distract", "Animation reveals hierarchy or guides attention — never just decoration."],
  ["04", "Handoff is part of the design", "Files that engineers can build from without translating the intent."],
];

export function FigmaPrinciples() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section className="relative">
      <div className="mx-auto max-w-[1440px] px-6 py-32 md:px-16 md:py-56">
        <div className="flex items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">
              <span style={{ color: "var(--signal)" }}>07</span>
              <span className="h-px w-10 bg-[var(--border-c)]" />
              <span>Principles</span>
            </div>
            <h2 className="mt-10 text-[clamp(48px,7vw,112px)] leading-[0.95] tracking-[-0.035em] text-[var(--text)]">
              I design <span className="font-serif italic text-[var(--muted)]">by.</span>
            </h2>
          </div>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--muted)] md:block">
            04 · Hover to read
          </span>
        </div>

        <ul className="mt-20 border-t border-[var(--border-c)]">
          {principles.map(([n, t, d], i) => (
            <li
              key={n}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="group relative grid cursor-default grid-cols-12 items-baseline gap-4 border-b border-[var(--border-c)] py-12 md:py-20"
            >
              <span className="col-span-2 font-mono text-[clamp(14px,1.4vw,18px)] tracking-[0.2em] text-[var(--muted)] md:col-span-1">
                {`{${n}}`}
              </span>

              <motion.span
                animate={{ x: active === i ? 16 : 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="col-span-10 text-[clamp(36px,6vw,96px)] leading-[0.95] tracking-[-0.03em] md:col-span-7"
                style={{ color: active === i ? "var(--text)" : "var(--muted)" }}
              >
                {t}
                <span className="font-serif italic text-[var(--muted)]">.</span>
              </motion.span>

              <motion.span
                initial={false}
                animate={{ opacity: active === i ? 1 : 0, y: active === i ? 0 : 8 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="col-span-12 max-w-md text-[14px] leading-[1.5] text-[var(--muted)] md:col-span-4 md:text-[15px]"
              >
                — {d}
              </motion.span>

              <motion.span
                className="absolute bottom-0 left-0 h-px"
                style={{ background: "var(--signal)" }}
                animate={{ width: active === i ? "100%" : "0%" }}
                transition={{ duration: 0.7, ease: EASE }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
