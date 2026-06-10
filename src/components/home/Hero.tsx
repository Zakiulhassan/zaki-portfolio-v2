"use client";

import React from "react";
import FluidBackground from "../effects/FluidBackground";
import { SplitReveal } from "../motion/SplitReveal";
import TextMarquee from "../motion/TextMarquee";
import ButtonGhost from "../UI/ButtonGhost";
import { LuArrowDown, LuArrowUpRight } from "react-icons/lu";
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
      <FluidBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-coal/10 via-coal/40 to-coal" />

      <Container className="relative z-10 flex h-full flex-col justify-between pb-10 pt-28">
        <div className="flex flex-col gap-6">
          <SplitReveal
            as="h1"
            mode="words"
            immediate
            delay={0.2}
            className="text-display text-[14vw] leading-[0.9] sm:text-[12vw] lg:text-[8vw]"
          >
            Crafting Digital
          </SplitReveal>
          <SplitReveal
            as="h1"
            mode="words"
            immediate
            delay={0.35}
            className="text-display text-[14vw] leading-[0.9] sm:text-[12vw] lg:text-[8vw] text-outline-acid"
          >
            Experiences
          </SplitReveal>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <p className="max-w-md font-serif-accent text-2xl text-ink-dim sm:text-3xl">
              Hey, I&apos;m Zaki ul Hassan — a designer &amp; developer who
              builds products that drive growth and build loyalty.
            </p>
            <div className="flex shrink-0 items-center gap-4">
              <ButtonGhost
                text="Case Studies"
                icon={<LuArrowUpRight />}
                href="/case-studies"
                className="text-lg cursor-pointer"
              />
              <div
                data-cursor="hover"
                className="flex h-14 w-14 shrink-0 animate-bounce items-center justify-center rounded-full border border-acid/40 text-acid"
              >
                <LuArrowDown />
              </div>
            </div>
          </div>

          <TextMarquee baseSpeed={45} className="border-t border-white/10 py-4">
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
