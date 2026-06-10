import TestimonialsSection from "@/components/home/TestimonialsSection";
import { LogoScrollVelocity } from "@/components/UI/VelocityScroll";
import ProofIHaveBeenBusy from "@/components/who-am-i/ProofIHaveBeenBusy";
import WhereWasIBefore from "@/components/who-am-i/WhereWasIBefore";
import WhoAmIHero from "@/components/who-am-i/WhoAmIHero";
import Container from "@/components/widgets/Container";
import React from "react";

const CaseStudies = () => {
  return (
    <section className="z-10 flex flex-col gap-12 bg-coal pt-24">
        <Container>
          <WhoAmIHero />
          <LogoScrollVelocity />
          <WhereWasIBefore />
          <ProofIHaveBeenBusy />
          <TestimonialsSection />
        </Container>
    </section>
  );
};

export default CaseStudies;
