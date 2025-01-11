import React from "react";
import Container from "../widgets/Container";
import Image from "next/image";
import Chip from "../UI/Chip";
import ShinyButton from "../UI/shiny-button";

const CaseStudiesSection = () => {
  return (
    <section className="bg-primary min-h-screen">
      <Container>
        <div className="flex flex-col gap-6 px-12 py-24">
          <h1 className="text-lg text-muted font-normal mb-2 leading-tight">
            Case Studies.
          </h1>

          <div className="flex flex-col gap-24">
            <div className="flex gap-8 justify-center ">
              <div className="bg-foreground px-4 relative flex-1 w-full flex items-center justify-center rounded-2xl overflow-hidden">
                <Image
                  className="absolute top-1"
                  src={"/case-study-image-1.png"}
                  alt="case-study-image"
                  width={450}
                  height={450}
                />
              </div>
              <div className="rounded-2xl flex flex-col gap-2 max-w-2xl">
                <div>
                  <Chip />
                </div>
                <h1 className="text-3xl font-semibold mb-2 bg-gradient-to-r from-greenPri to-greenSec bg-clip-text text-transparent">
                  Streamlining App Customization that Improved Onboarding and
                  Retention
                </h1>
                <p className="text-base leading-tight text-secondary mb-2">
                  Leading the design effort, I helped create the Pugpig Design
                  Kit to streamline app customisation, offering clients a
                  user-friendly tool with comprehensive documentation for an
                  enhanced app experience
                </p>

                <div className="flex justify-between gap-4">
                  <div className="bg-foreground p-3 rounded-lg">
                    <h3 className="text-2xl font-bricolage font-bold mb-2 leading-tight bg-gradient-to-r from-greenPri to-greenSec bg-clip-text text-transparent">
                      50%
                    </h3>
                    <p className="text-base font-light tracking-wide text-secondary">
                      Increase in satisfaction resulting to customer onboarding
                      efficiency.
                    </p>
                  </div>
                  <div className="bg-foreground p-3 rounded-lg">
                    <h3 className="text-2xl font-bricolage font-bold mb-2 leading-tight bg-gradient-to-r from-greenPri to-greenSec bg-clip-text text-transparent">
                      60%
                    </h3>
                    <p className="text-sm text-secondary">
                      Visits suggests increased customization interest.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-8 justify-center">
              <div className="rounded-2xl flex flex-col gap-2 max-w-2xl">
                <div>
                  <Chip />
                </div>
                <h1 className="text-3xl font-semibold mb-2 bg-gradient-to-r from-greenPri to-greenSec bg-clip-text text-transparent">
                  Streamlining App Customization that Improved Onboarding and
                  Retention
                </h1>
                <p className="text-base leading-tight text-secondary mb-2">
                  Leading the design effort, I helped create the Pugpig Design
                  Kit to streamline app customisation, offering clients a
                  user-friendly tool with comprehensive documentation for an
                  enhanced app experience
                </p>

                <div className="flex justify-between gap-4">
                  <div className="bg-foreground p-3 rounded-lg">
                    <h3 className="text-2xl font-bricolage font-bold mb-2 leading-tight bg-gradient-to-r from-greenPri to-greenSec bg-clip-text text-transparent">
                      50%
                    </h3>
                    <p className="text-base font-light tracking-wide text-secondary">
                      Increase in satisfaction resulting to customer onboarding
                      efficiency.
                    </p>
                  </div>
                  <div className="bg-foreground p-3 rounded-lg">
                    <h3 className="text-2xl font-bricolage font-bold mb-2 leading-tight bg-gradient-to-r from-greenPri to-greenSec bg-clip-text text-transparent">
                      60%
                    </h3>
                    <p className="text-sm text-secondary">
                      Visits suggests increased customization interest.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-foreground px-4 relative flex-1 w-full flex items-center justify-center rounded-2xl overflow-hidden">
                <Image
                  className="absolute top-1"
                  src={"/case-study-image-1.png"}
                  alt="case-study-image"
                  width={450}
                  height={450}
                />
              </div>
            </div>
          </div>

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
