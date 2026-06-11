import React from "react";
import Container from "../widgets/Container";
import ShinyButton from "../UI/shiny-button";
import CaseStudyCards from "../case-studies/CaseStudyCards";
import { SplitReveal, FadeIn } from "../motion/SplitReveal";
import RevealTick from "../motion/RevealTick";

const CaseStudiesSection = () => {
  return (
    <section className="border-t border-line700 bg-coal">
      <Container>
        <div className="flex flex-col gap-12 py-24 sm:py-32">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="rail">
              <span className="idx">03</span>
              <SplitReveal
                as="h2"
                mode="words"
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-heading leading-tight"
              >
                Case studies
              </SplitReveal>
              <RevealTick />
            </div>
            <FadeIn className="max-w-md">
              <p className="text-base text-ink-dim sm:text-lg md:text-right">
                The problem we started with, the calls I made, and the numbers
                that followed.
              </p>
            </FadeIn>
          </div>

          <CaseStudyCards />

          <div className="flex w-full flex-col items-center gap-0">
            <ShinyButton className="outline-gray-400 outline-2 text-lg">
              View All Case Studies
            </ShinyButton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CaseStudiesSection;
