"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { SplitReveal, FadeIn } from "../motion/SplitReveal";
import Container from "../widgets/Container";
import WebGLDesignArtifact from "../effects/WebGLDesignArtifact";

const CAPABILITIES = ["Brand Design", "Product UX", "Design Systems"];

const HEADLINE_LEFT = "I design brand systems";
const HEADLINE_RIGHT = "and product experiences.";
const HEADLINE = `${HEADLINE_LEFT} ${HEADLINE_RIGHT}`;

/**
 * Opening scene: a centered portrait staged inside a forming design-system
 * world, with the headline split around it and supporting metadata,
 * capabilities and CTAs anchored to the four corners — calm, spare,
 * one visual anchor.
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
      className="relative min-h-screen w-full overflow-hidden bg-coal text-ink"
    >
      {/* Quiet background: faint radial light + 1px arc linework */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[40%] h-[110vmin] w-[110vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(244,244,239,0.06),transparent_72%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[40%] h-[88vmin] w-[88vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/[0.06]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[40%] h-[64vmin] w-[64vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/[0.05]"
      />

      {/* WebGL design artifact: cursor-reactive UI fragments forming around the figure */}
      <WebGLDesignArtifact targetRef={sectionRef} />

      {/* Headline, split around the centered figure */}
      <h1
        aria-label={HEADLINE}
        className="absolute inset-x-0 top-[15vh] z-[1] flex flex-col gap-6 px-container sm:flex-row sm:items-start sm:justify-between sm:gap-[4vw] sm:px-container-md lg:top-[16vh] lg:px-container-lg"
      >
        <span aria-hidden="true" className="contents">
          <SplitReveal
            as="span"
            mode="words"
            immediate
            delay={0.3}
            stagger={0.025}
            className="block max-w-[12ch] text-display tracking-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.1] sm:text-left"
          >
            {HEADLINE_LEFT}
          </SplitReveal>
          <SplitReveal
            as="span"
            mode="words"
            immediate
            delay={0.42}
            stagger={0.025}
            className="block max-w-[13ch] text-display tracking-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.1] text-ink-dim sm:text-right"
          >
            {HEADLINE_RIGHT}
          </SplitReveal>
        </span>
      </h1>

      {/* Centered portrait, anchored to the bottom edge */}
      <div className="absolute bottom-0 left-1/2 z-[2] aspect-[934/1791] h-[56vh] -translate-x-1/2 sm:h-[64vh] lg:h-[76vh]">
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

      <Container className="pointer-events-none relative z-[3] min-h-screen">
        {/* Metadata stack — left */}
        <FadeIn
          immediate
          delay={0.6}
          y={14}
          className="absolute left-container top-[46%] hidden sm:block lg:left-container-lg"
        >
          <div className="flex flex-col gap-2.5">
            <span className="label flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-acid" aria-hidden />
              Available for selected projects
            </span>
            <span className="label">PK — Working globally</span>
          </div>
        </FadeIn>

        {/* Capability labels — right */}
        <FadeIn
          immediate
          delay={0.72}
          y={14}
          className="absolute right-container top-[46%] hidden max-w-[230px] sm:block lg:right-container-lg"
        >
          <div className="flex flex-col items-end gap-2.5">
            {CAPABILITIES.map((c) => (
              <span
                key={c}
                className="label rounded-full border border-line700 px-3.5 py-1.5"
              >
                {c}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* CTA — mobile only, bottom center */}
        <FadeIn
          immediate
          delay={0.84}
          y={14}
          className="pointer-events-auto absolute inset-x-0 bottom-[4vh] flex justify-center sm:hidden"
        >
          <Link href="/case-studies" data-cursor="hover" className="btn btn-primary">
            View selected work <span className="arr">→</span>
          </Link>
        </FadeIn>

        {/* Scroll cue — bottom left */}
        <FadeIn
          immediate
          delay={0.96}
          y={14}
          className="absolute bottom-[6vh] left-container hidden sm:block md:left-container-md lg:left-container-lg"
        >
          <div className="flex flex-col items-start gap-3">
            <span className="label">Scroll to explore</span>
            <span className="scroll-cue-line" aria-hidden />
          </div>
        </FadeIn>

        {/* CTA — bottom right */}
        <FadeIn
          immediate
          delay={0.84}
          y={14}
          className="pointer-events-auto absolute bottom-[6vh] right-container hidden sm:block md:right-container-md lg:right-container-lg"
        >
          <Link href="/case-studies" data-cursor="hover" className="btn btn-primary">
            View selected work <span className="arr">→</span>
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
};

export default Hero;
