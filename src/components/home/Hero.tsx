"use client";

import React from "react";
import Link from "next/link";
import FluidBackground from "../effects/FluidBackground";
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
    <section className="relative h-screen w-full overflow-hidden bg-coal text-ink">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full sm:w-2/3 lg:w-1/2">
        <FluidBackground />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-coal/10 via-coal/40 to-coal" />

      <Container className="relative z-10 flex h-full flex-col justify-between pb-10 pt-28">
        <div className="flex flex-col gap-6">
          <SplitReveal
            as="h1"
            mode="words"
            immediate
            delay={0.2}
            className="text-display tracking-display text-[14vw] leading-[0.9] sm:text-[10vw] lg:text-[7vw]"
          >
            Design that makes
          </SplitReveal>
          <h1 className="text-display tracking-display text-[14vw] leading-[0.9] sm:text-[10vw] lg:text-[7vw]">
            <SplitReveal
              as="span"
              mode="words"
              immediate
              delay={0.35}
              className="inline"
            >
              products easier to
            </SplitReveal>{" "}
            <SplitReveal
              as="span"
              mode="words"
              immediate
              delay={0.45}
              className="inline text-acid"
            >
              trust.
            </SplitReveal>
          </h1>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <FadeIn immediate delay={0.5} className="max-w-md">
              <p className="text-lg text-ink-dim sm:text-xl">
                I help agencies, startups, and product teams turn complex
                digital experiences into clear, polished, high-quality
                interfaces that feel credible from the first interaction.
              </p>
            </FadeIn>
            <FadeIn
              immediate
              delay={0.65}
              className="flex shrink-0 flex-wrap items-center gap-4"
            >
              <Link href="/case-studies" data-cursor="hover" className="btn btn-primary">
                View Selected Work
              </Link>
              <Link href="/book-a-call" data-cursor="hover" className="btn btn-secondary">
                Let&apos;s Talk Design
              </Link>
            </FadeIn>
          </div>

          <TextMarquee baseSpeed={45} className="border-t border-line700 py-4">
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
        </div>
      </Container>
    </section>
  );
};

export default Hero;
