import React from "react";
import Container from "../widgets/Container";
import ShinyButton from "../UI/shiny-button";
import CaseStudyCards from "../case-studies/CaseStudyCards";
import { SplitReveal } from "../motion/SplitReveal";
import RevealTick from "../motion/RevealTick";

const CaseStudiesSection = () => {
  return (
    <section className="bg-coal min-h-screen">
      <Container>
        <div className="flex flex-col gap-6 px-12 py-24">
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

          <CaseStudyCards />

          <div className="w-full flex flex-col gap-0 items-center">
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
