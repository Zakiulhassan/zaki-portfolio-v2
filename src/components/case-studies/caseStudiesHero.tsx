"use client";

import React from "react";
import ShinnyTextCompDark from "../widgets/ShinnyTextCompDark";
import ShinyButtonSM from "../UI/shiny-buttonSM";
import { SplitReveal, FadeIn } from "../motion/SplitReveal";

const CaseStudiesHero = () => {
  return (
    <section className="min-h-[65vh] h-full w-full flex flex-col gap-8 sm:gap-10 md:gap-16 items-center justify-center px-4 sm:px-8 lg:px-12 text-center">
      <div className="flex flex-col gap-4 items-center">
        <FadeIn immediate className="flex justify-center w-full">
          <ShinnyTextCompDark />
        </FadeIn>

        <h1 className="text-display text-[12vw] leading-[0.95] text-ink sm:text-[8vw] lg:text-[6vw]">
          <SplitReveal
            as="span"
            mode="words"
            immediate
            delay={0.15}
            className="inline text-acid"
          >
            Decisions,
          </SplitReveal>{" "}
          <SplitReveal
            as="span"
            mode="words"
            immediate
            delay={0.3}
            className="inline"
          >
            not deliverables.
          </SplitReveal>
        </h1>

        <FadeIn immediate delay={0.6} className="max-w-2xl">
          <p className="text-xl text-ink-dim sm:text-2xl">
            Each case study shows the problem we started with, the calls I
            made, and the numbers that followed. Judge the thinking, not just
            the screens.
          </p>
        </FadeIn>

        <FadeIn immediate delay={0.8}>
          <ShinyButtonSM className="outline-gray-400 outline-2 text-sm sm:text-lg">
            Start Your Project
          </ShinyButtonSM>
        </FadeIn>
      </div>
    </section>
  );
};

export default CaseStudiesHero;
