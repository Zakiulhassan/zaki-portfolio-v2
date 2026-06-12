"use client";

import React from "react";
import Link from "next/link";
import FluidBackground from "../effects/FluidBackground";
import FluidImage from "../motion/FluidImage";
import { SplitReveal, FadeIn } from "../motion/SplitReveal";
import TextMarquee from "../motion/TextMarquee";
import Container from "../widgets/Container";

const SKILLS = [
  "UX Design",
  "Brand Identity",
  "Product Strategy",
  "Full-Stack Development",
  "Interaction Design",
  "Design Systems",
];

const Hero = () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-coal text-ink">
      <div className="pointer-events-none absolute inset-0">
        <FluidBackground />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-coal/20 via-coal/35 to-coal" />

      <Container className="relative z-10 flex flex-1 flex-col items-center pb-12 pt-28 sm:pt-32">
        {/* Top label */}
        <FadeIn immediate delay={0.1} y={12}>
          <p className="label flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 bg-acid" aria-hidden />
            Available for new projects &mdash; 2026
          </p>
        </FadeIn>

        {/* Centered headline */}
        <h1 className="mt-6 text-center text-display tracking-display text-[12vw] leading-[1.05] sm:text-[7vw] lg:text-[5vw]">
          <SplitReveal
            as="span"
            mode="words"
            immediate
            delay={0.2}
            className="inline"
          >
            Trust is a
          </SplitReveal>{" "}
          <SplitReveal
            as="span"
            mode="words"
            immediate
            delay={0.32}
            className="inline font-gloria font-normal lowercase tracking-normal text-acid"
          >
            design decision.
          </SplitReveal>
        </h1>

        {/* Image row: info left / portrait center / subtext right */}
        <div className="mt-10 grid w-full flex-1 grid-cols-1 items-center gap-10 sm:mt-14 lg:grid-cols-[1fr_auto_1fr] lg:gap-12">
          {/* Left info */}
          <FadeIn
            immediate
            delay={0.5}
            className="order-2 flex flex-col items-center gap-5 text-center lg:order-1 lg:items-start lg:text-left"
          >
            <p className="label">Product Designer &amp; Developer</p>
            <p className="max-w-xs text-base text-ink-dim sm:text-lg">
              Based in Pakistan, working globally — Since 2018 I&apos;ve
              designed and built products for startups, agencies, and
              product teams.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link href="/case-studies" data-cursor="hover" className="btn btn-primary">
                View Selected Work
              </Link>
              <Link href="/book-a-call" data-cursor="hover" className="btn btn-secondary">
                Book a Strategy Call
              </Link>
            </div>
          </FadeIn>

          {/* Center portrait */}
          <FadeIn immediate delay={0.3} y={28} className="order-1 mx-auto lg:order-2">
            <div className="relative w-[64vw] max-w-[360px] sm:w-[40vw] lg:w-[22vw]">
              <div className="absolute -inset-6 -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(198,254,30,0.18),transparent)]" />
              <FluidImage
                src="/zaki-headshot.webp"
                alt="Zaki ul Hassan"
                priority
                sizes="(min-width: 1024px) 22vw, 50vw"
                className="aspect-square rounded-2xl border border-line700 bg-coal-soft"
              />
            </div>
          </FadeIn>

          {/* Right subtext */}
          <FadeIn
            immediate
            delay={0.5}
            className="order-3 flex flex-col items-center gap-3 text-center lg:items-end lg:text-right"
          >
            <p className="max-w-xs text-base text-ink-dim sm:text-lg">
              Interfaces clear enough to use without thinking, credible
              enough to buy from — that&apos;s the standard for every
              project I take on.
            </p>
            <p className="label">
              Based in Pakistan
              <span className="hidden sm:inline"> / Working globally</span>
            </p>
          </FadeIn>
        </div>

        {/* Scroll cue */}
        <FadeIn immediate delay={1.1} y={12} className="mt-10 sm:mt-14">
          <div className="flex flex-col items-center gap-3">
            <span className="label">Scroll</span>
            <span className="scroll-cue-line" aria-hidden />
          </div>
        </FadeIn>
      </Container>

      <TextMarquee baseSpeed={45} className="relative z-10 border-t border-line700 py-4">
        {SKILLS.map((skill, i) => (
          <span
            key={i}
            className="mx-6 flex items-center gap-6 text-sm uppercase tracking-[0.3em] text-ink-dim"
          >
            {skill}
            <span className="text-acid">/</span>
          </span>
        ))}
      </TextMarquee>
    </section>
  );
};

export default Hero;
