"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { SplitReveal, FadeIn } from "../motion/SplitReveal";
import Container from "../widgets/Container";
import WebGLDesignArtifact from "../effects/WebGLDesignArtifact";

const CAPABILITIES = [
  "Brand Design",
  "Product UX",
  "Website Design",
  "Design Systems",
  "Frontend Implementation",
];

const HEADLINE =
  "I design brand systems and product experiences for teams that need clarity, structure, and stronger digital presence.";

/**
 * Opening scene: a left-anchored headline overlaps a portrait staged
 * inside a forming design-system world — UI plates, grids and brand
 * tokens drift around the figure as cursor-reactive artifacts.
 */
const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 48]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-coal text-ink"
    >
      {/* Quiet background: faint radial light + 1px arc linework */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[6vw] top-[42%] h-[100vmin] w-[100vmin] -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(244,244,239,0.06),transparent_72%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[6vw] top-[42%] h-[78vmin] w-[78vmin] -translate-y-1/2 rounded-full border border-ink/[0.06]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[6vw] top-[42%] h-[58vmin] w-[58vmin] -translate-y-1/2 rounded-full border border-ink/[0.05]"
      />

      {/* WebGL design artifact: cursor-reactive UI fragments forming around the figure */}
      <WebGLDesignArtifact targetRef={sectionRef} />

      {/* Portrait, staged right of center, headline overlaps its left edge */}
      <div className="absolute bottom-0 right-[2vw] z-[2] aspect-[934/1791] h-[52vh] sm:h-[60vh] lg:right-[8vw] lg:h-[78vh]">
        <FadeIn immediate delay={0.15} y={32} className="h-full w-full">
          <motion.div style={{ y: portraitY }} className="relative h-full w-full">
            <Image
              src="/zaki-portrait.webp"
              alt="Zaki ul Hassan, seated portrait"
              fill
              priority
              sizes="(min-width: 1024px) 40vh, 60vw"
              className="object-contain object-bottom"
            />
          </motion.div>
        </FadeIn>
      </div>

      {/* Ground the figure into the section edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-24 bg-gradient-to-b from-transparent to-coal"
      />

      <Container className="relative z-[3] flex min-h-screen flex-col justify-between gap-8 pb-8 pt-[12vh] sm:pt-[13vh]">
        {/* Metadata stack — top left */}
        <FadeIn immediate delay={0.2} y={14}>
          <div className="flex flex-col gap-2.5">
            <span className="label">Portfolio — 2026</span>
            <span className="label flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-acid" aria-hidden />
              Available for selected projects
            </span>
            <span className="label">PK — Working globally</span>
          </div>
        </FadeIn>

        {/* Headline + supporting copy, overlapping the portrait's left edge */}
        <div className="max-w-[62rem]">
          <SplitReveal
            as="h1"
            mode="words"
            immediate
            delay={0.3}
            stagger={0.025}
            className="text-display tracking-display text-[clamp(2rem,4.6vw,4.2rem)] leading-[1.08]"
          >
            {HEADLINE}
          </SplitReveal>

          <FadeIn immediate delay={0.72} y={18} className="mt-6 max-w-xl">
            <p className="text-base leading-relaxed text-ink-dim sm:text-lg">
              I help startups, SaaS teams, AI products, and service businesses
              turn scattered ideas into clear brands, usable interfaces, and
              websites that are easier to understand, trust, and act on.
            </p>
          </FadeIn>

          <FadeIn immediate delay={0.84} y={14} className="mt-6 flex max-w-2xl flex-wrap gap-2.5">
            {CAPABILITIES.map((c) => (
              <span
                key={c}
                className="label rounded-full border border-line700 px-3.5 py-1.5"
              >
                {c}
              </span>
            ))}
          </FadeIn>
        </div>

        {/* CTAs + scroll cue — bottom row */}
        <FadeIn immediate delay={0.96} y={14}>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/case-studies" data-cursor="hover" className="btn btn-primary">
                View selected work <span className="arr">→</span>
              </Link>
              <Link href="/about-me" data-cursor="hover" className="btn btn-secondary">
                See how I think
              </Link>
            </div>
            <div className="hidden flex-col items-center gap-3 sm:flex">
              <span className="label">Scroll to explore</span>
              <span className="scroll-cue-line" aria-hidden />
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default Hero;
