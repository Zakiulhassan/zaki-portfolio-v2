"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MagneticButton } from "./MagneticButton";

const EASE = [0.6, 0.01, 0.05, 1] as const;

export function FigmaHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden pt-32 md:pt-40">
      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle, var(--text) 0.5px, transparent 0.5px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      {/* Curved signal lines */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <motion.path
          d="M -100 720 Q 360 360, 720 540 T 1540 360"
          fill="none"
          stroke="var(--signal)"
          strokeWidth="0.6"
          strokeOpacity="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 0.6, ease: EASE }}
        />
        <motion.path
          d="M 1540 880 Q 1080 760, 720 880 T -100 1000"
          fill="none"
          stroke="var(--text)"
          strokeWidth="0.4"
          strokeOpacity="0.15"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3.5, delay: 1, ease: EASE }}
        />
      </svg>

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-16">
        {/* Top metadata row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]"
        >
          <span>
            <span style={{ color: "var(--signal)" }}>●</span>&nbsp;&nbsp;Portfolio · 2026
          </span>
          <span className="hidden md:inline">Karachi · GMT+5</span>
          <span className="hidden md:inline">001 / Hero</span>
        </motion.div>

        {/* Composition: portrait center, name wraps top + bottom */}
        <div className="relative mt-12 md:mt-16">
          <motion.h1
            aria-label="Zaki ul Hassan"
            style={{ y: textY }}
            className="relative z-0 select-none text-center leading-[0.85] tracking-[-0.04em]"
          >
            <span aria-hidden="true" className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
                className="block text-[clamp(72px,17vw,260px)]"
              >
                ZAKI&nbsp;UL
              </motion.span>
            </span>
          </motion.h1>

          {/* Center portrait */}
          <motion.div
            style={{ y: imgY }}
            className="relative z-10 mx-auto -mt-[6vw] aspect-[3/4] w-[68%] max-w-[420px] md:-mt-[5vw] md:w-[34%]"
          >
            <motion.div
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.7, 0, 0.2, 1] }}
              className="absolute inset-0 z-10 origin-top"
              style={{ background: "var(--bg)" }}
            />
            <motion.div
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2.2, delay: 0.5, ease: EASE }}
              className="relative h-full w-full overflow-hidden"
            >
              <Image
                src="/zaki-portrait.webp"
                alt="Zaki ul Hassan"
                fill
                priority
                sizes="(min-width: 768px) 34vw, 68vw"
                className="object-cover object-top grayscale-[20%] contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent" />
            </motion.div>
          </motion.div>

          {/* Bottom half of name */}
          <motion.div
            aria-hidden="true"
            style={{ y: textY }}
            className="relative z-20 -mt-[8vw] select-none text-center leading-[0.85] tracking-[-0.04em] mix-blend-difference"
          >
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.45, ease: EASE }}
                className="block text-[clamp(72px,17vw,260px)]"
                style={{ color: "var(--text)" }}
              >
                HASSAN<span className="font-serif italic text-[var(--muted)]">.</span>
              </motion.span>
            </span>
          </motion.div>

          {/* Floating metadata — left */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="pointer-events-none absolute left-0 top-[34%] z-30 hidden md:block"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="max-w-[180px]"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">
                <span style={{ color: "var(--signal)" }}>●</span> Experience
              </span>
              <p className="mt-2 text-[15px] leading-tight text-[var(--text)]">
                5+ years designing
                <br />
                SaaS, AI &amp; web products.
              </p>
            </motion.div>
          </motion.div>

          {/* Floating metadata — right */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.35 }}
            className="pointer-events-none absolute right-0 top-[42%] z-30 hidden text-right md:block"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
              className="ml-auto max-w-[200px]"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">
                Discipline /
              </span>
              <p className="mt-2 text-[15px] leading-tight text-[var(--text)]">
                Product · UX/UI ·<br />
                Website · Systems
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Statement + CTAs */}
        <div className="relative mt-16 grid grid-cols-12 gap-6 md:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="col-span-12 md:col-span-5"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">
              / 002 — Statement
            </span>
            <p className="mt-4 text-[18px] leading-[1.4] text-[var(--text)] md:text-[22px]">
              Senior Product Designer for SaaS, AI, and digital products. I design interfaces,
              websites, and design systems that make complex products easier to{" "}
              <span className="font-serif italic text-[var(--muted)]">use, present, and build.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.25 }}
            className="col-span-12 flex flex-wrap items-end gap-4 md:col-span-5 md:col-start-8 md:justify-end"
          >
            <MagneticButton to="/case-studies">View Work</MagneticButton>
            <MagneticButton to="/book-a-call" variant="ghost">
              Book a Call
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Bottom edge — scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="pointer-events-none absolute bottom-6 left-0 right-0 mx-auto flex max-w-[1440px] items-center justify-between px-6 font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--muted)] md:px-16"
      >
        <span>Scroll to read</span>
        <motion.span
          className="h-px"
          style={{ background: "var(--signal)" }}
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 1.6, delay: 1.6 }}
        />
        <span>↓</span>
      </motion.div>
    </section>
  );
}
