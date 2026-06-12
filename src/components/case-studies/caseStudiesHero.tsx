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

        <h1
          aria-label="Three products, three outcomes."
          className="text-display text-[10vw] leading-[1.05] text-ink sm:text-[6.5vw] lg:text-[5vw]"
        >
          <span aria-hidden="true">
            <SplitReveal
              as="span"
              mode="words"
              immediate
              delay={0.15}
              className="inline"
            >
              Three products,
            </SplitReveal>{" "}
            <SplitReveal
              as="span"
              mode="words"
              immediate
              delay={0.3}
              className="inline text-acid"
            >
              three outcomes.
            </SplitReveal>
          </span>
        </h1>

        <FadeIn immediate delay={0.6} className="max-w-2xl">
          <p className="text-xl text-ink-dim sm:text-2xl">
            Pick any one and you&apos;ll get the same thing: the problem we
            started with, the decisions I made, and the numbers that followed.
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
