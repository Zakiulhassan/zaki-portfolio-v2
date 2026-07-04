"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MagneticButton } from "./MagneticButton";
import { Reveal, RevealLines } from "./Reveal";

const EASE = [0.6, 0.01, 0.05, 1] as const;

/** Portrait + name offsets — mobile/sm tuned; md+ locked to approved desktop layout */
const NAME = {
  topBottom: "top-[35%] sm:bottom-[81%] md:bottom-[83%]",
  bottomTop: "top-[54%] sm:top-[56%] md:top-[59%]",
  topWrap:
    "lg:left-[15%] md:left-1/2 w-[100vw] -translate-x-1/2 px-4 text-left sm:px-5 md:w-max md:px-0 md:text-center md:-translate-x-[calc(50%+clamp(12px,3.2vw,40px))]",
  bottomWrap:
    "lg:left-[100%] md:left-1/2 w-[100vw] -translate-x-1/2 px-4 text-right sm:px-5 md:w-max md:px-0 md:text-center md:-translate-x-[calc(50%-clamp(12px,3.2vw,40px))]",
  textSize: "text-[clamp(48px,14.5vw,80px)] md:text-[clamp(36px,min(9vw,12vh),140px)]",
} as const;

/** Side metadata — pinned to bottom of hero composition */
const META = {
  bottom: "bottom-[clamp(1.25rem,3.5vh,2.75rem)]",
} as const;

export function FigmaHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={ref} className="relative h-[100svh] overflow-hidden">
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

      {/* Ambient signal glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[80vw] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle at center, rgba(198,254,30,0.12) 0%, rgba(198,254,30,0) 65%)",
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto flex h-full w-full max-w-[1440px] flex-col px-6 md:px-16">
        {/* Portrait flush to viewport bottom; name wraps via absolute % offsets */}
        <div className="relative flex flex-1 items-end justify-center pt-28 md:pt-32">
          <motion.div
            style={{ y: imgY }}
            className="relative z-10 aspect-[3/4] h-[calc(100svh-7rem)] w-[min(88vw,calc((100svh-7rem)*0.75))] md:h-[calc(100svh-8rem)] md:w-[min(44vw,calc((100svh-8rem)*0.75))] lg:w-[min(40vw,calc((100svh-8rem)*0.75))]"
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
                sizes="(min-width: 1024px) 40vw, (min-width: 768px) 44vw, 92vw"
                className="object-cover object-top grayscale-[20%] contrast-110"
              />
            </motion.div>

            {/* Top of name — behind the head, slightly left */}
            <div
              className={`pointer-events-none absolute z-0 select-none leading-[0.82] tracking-[-0.04em] mix-blend-exclusion ${NAME.topBottom} ${NAME.topWrap}`}
            >
              <motion.div style={{ y: textY }}>
                <h1 aria-label="Zaki ul Hassan" className="whitespace-nowrap">
                  <span aria-hidden="true" className="block overflow-hidden">
                    <motion.span
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
                      className={`block font-medium ${NAME.textSize}`}
                    >
                      ZAKI&nbsp;UL
                    </motion.span>
                  </span>
                </h1>
              </motion.div>
            </div>

            {/* Bottom of name — overlaps portrait, slightly right */}
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute z-20 select-none whitespace-nowrap leading-[0.82] tracking-[-0.04em] mix-blend-exclusion ${NAME.bottomTop} ${NAME.bottomWrap}`}
            >
              <motion.div style={{ y: textY }}>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, delay: 0.45, ease: EASE }}
                  className={`block font-medium ${NAME.textSize}`}
                  style={{ color: "var(--text)" }}
                >
                  HASSAN<span className="font-serif italic text-[var(--muted)]">.</span>
                </motion.span>
              </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating metadata — left, bottom-aligned */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className={`pointer-events-none absolute left-0 z-30 hidden md:block ${META.bottom}`}
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

          {/* Floating metadata — right, bottom-aligned */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.35 }}
            className={`pointer-events-none absolute right-0 z-30 hidden text-right md:block ${META.bottom}`}
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
      </div>

      {/* Bottom edge — scroll cue */}
      {/* <motion.div
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
      </motion.div> */}
    </section>
  );
}

/* Statement + CTAs — the second, fully composed section beneath the hero */
export function FigmaStatement() {
  return (
    <section className="relative border-t border-[var(--border-c)] py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16">
        <div className="mx-auto flex max-w-[min(92vw,820px)] flex-col items-center text-center">
          <RevealLines
            text={"Senior Product Designer for SaaS, AI,\nand digital products."}
            className="text-[clamp(26px,4.5vw,52px)] leading-[1.15] tracking-[-0.02em] text-[var(--text)]"
          />

          <Reveal delay={0.15} className="mt-5 max-w-[min(88vw,640px)] md:mt-6">
            <p className="text-[clamp(15px,2.2vw,19px)] leading-[1.65] text-[var(--muted)]">
              I design interfaces, websites, and design systems that make complex products
              easier to{" "}
              <span className="font-serif italic text-[var(--text)]">use, present, and build.</span>
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-10 md:gap-4">
            <MagneticButton to="/case-studies">View Work</MagneticButton>
            <MagneticButton to="/book-a-call" variant="ghost">
              Book a Call
            </MagneticButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
