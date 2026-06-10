import React from "react";
import Container from "../widgets/Container";
import ShinyButton from "../UI/shiny-button";
import CaseStudyCards from "../case-studies/CaseStudyCards";
import { SplitReveal } from "../motion/SplitReveal";

const CaseStudiesSection = () => {
  return (
    <section className="bg-coal min-h-screen">
      <Container>
        <div className="flex flex-col gap-6 px-12 py-24">
          <SplitReveal
            as="h1"
            mode="words"
            className="text-display text-[10vw] leading-[0.95] text-ink sm:text-[7vw] lg:text-[5vw] mb-2"
          >
            Case Studies
          </SplitReveal>

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
