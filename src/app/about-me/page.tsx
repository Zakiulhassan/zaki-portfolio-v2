import { LogoScrollVelocity } from "@/components/UI/VelocityScroll";
import ProofIHaveBeenBusy from "@/components/who-am-i/ProofIHaveBeenBusy";
import WhereWasIBefore from "@/components/who-am-i/WhereWasIBefore";
import WhoAmIHero from "@/components/who-am-i/WhoAmIHero";
import Container from "@/components/widgets/Container";
import { Testimonials } from "@/components/widgets/Testimonials";
import React from "react";

const CaseStudies = () => {
  return (
    <section className="z-10 flex flex-col gap-12">
      <div className="w-full px-12 py-12">
        <Container>
          <div className="flex flex-col gap-12 min-h-screen">
            <WhoAmIHero />
            <LogoScrollVelocity />
          </div>
          <WhereWasIBefore />
          <ProofIHaveBeenBusy />
          <Testimonials />
        </Container>
      </div>
    </section>
  );
};

export default CaseStudies;
