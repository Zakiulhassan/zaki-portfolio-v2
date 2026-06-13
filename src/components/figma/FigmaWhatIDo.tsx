"use client";

import { motion } from "framer-motion";
import { Reveal, RevealLines } from "./Reveal";

const EASE = [0.6, 0.01, 0.05, 1] as const;

export function FigmaWhatIDo() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-28 md:px-16 md:py-32">
        {/* Abstract obsidian object */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute right-[-15%] top-[14%] h-[80vw] max-h-[820px] w-[80vw] max-w-[820px]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20% 0px" }}
          transition={{ duration: 2, ease: EASE }}
        >
          <svg viewBox="0 0 600 600" className="h-full w-full">
            <defs>
              <radialGradient id="obsidian" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#26261F" />
                <stop offset="60%" stopColor="#171713" />
                <stop offset="100%" stopColor="#0D0D0B" />
              </radialGradient>
              <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="rgba(198,254,30,0.35)" />
                <stop offset="60%" stopColor="rgba(241,238,230,0)" />
              </linearGradient>
            </defs>
            <motion.circle
              cx="300"
              cy="300"
              r="240"
              fill="url(#obsidian)"
              stroke="url(#edge)"
              strokeWidth="1.5"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "300px 300px" }}
            />
            <motion.circle
              cx="300"
              cy="300"
              r="270"
              fill="none"
              stroke="rgba(198,254,30,0.18)"
              strokeWidth="1"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "300px 300px" }}
              strokeDasharray="2 12"
            />
            <motion.circle
              cx="300"
              cy="300"
              r="290"
              fill="none"
              stroke="rgba(241,238,230,0.08)"
              strokeWidth="1"
              animate={{ rotate: -360 }}
              transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "300px 300px" }}
              strokeDasharray="1 6"
            />
            <circle cx="300" cy="300" r="3" fill="var(--signal)" />
          </svg>
        </motion.div>

        <div className="relative grid grid-cols-12 gap-6">
          <h2
            aria-label="Design for products that need to be clearer."
            className="h-section col-span-12 md:col-span-8"
          >
            <span aria-hidden="true">
              <RevealLines text={"Design for products"} />
              <RevealLines text={"that need to be"} />
              <span className="block font-serif italic text-[var(--muted)]">
                <RevealLines text={"clearer."} />
              </span>
            </span>
          </h2>

          <Reveal className="col-span-12 mt-10 md:col-span-4 md:col-start-9 md:row-start-1 md:mt-16 md:self-end">
            <p className="text-[16px] leading-[1.5] text-[var(--muted)] md:text-[18px]">
              I help teams improve product flows, interfaces, websites, and design systems — from
              early structure to polished handoff.
            </p>
            <div className="mt-12 flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">
              <span>Structure</span>
              <span className="h-px w-4 bg-[var(--border-c)]" />
              <span>Interface</span>
              <span className="h-px w-4 bg-[var(--border-c)]" />
              <span>Handoff</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
