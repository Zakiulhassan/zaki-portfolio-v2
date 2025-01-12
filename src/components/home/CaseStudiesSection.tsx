import React from "react";
import Container from "../widgets/Container";
import ShinyButton from "../UI/shiny-button";
import CaseStudyCards from "../case-studies/CaseStudyCards";

const CaseStudiesSection = () => {
  return (
    <section className="bg-primary min-h-screen">
      <Container>
        <div className="flex flex-col gap-6 px-12 py-24">
          <h1 className="text-lg text-muted font-normal mb-2 leading-tight">
            Case Studies.
          </h1>

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
