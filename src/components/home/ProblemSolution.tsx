"use client";

import React from "react";
import Container from "../widgets/Container";
import { ScrubWords, FadeIn } from "../motion/SplitReveal";
import RevealTick from "../motion/RevealTick";
import { FadeTextComp } from "../widgets/FadeText";
import CardList from "../widgets/CardList";
import SuccessCardList from "../widgets/SuccessCardList";
import Parallax from "../motion/Parallax";

const ProblemSolution = () => {
  return (
    <section className="border-t border-line700 bg-coal">
      <Container>
        <div className="flex flex-col gap-16 py-24 sm:py-32">
          <div className="flex w-full flex-col gap-12 lg:flex-row">
            {/* Left Text Section */}
            <div className="flex-1">
              <FadeIn>
                <div className="rail mb-4">
                  <span className="idx">02</span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-heading leading-tight">
                    Why good products lose users
                  </h2>
                  <RevealTick />
                </div>
              </FadeIn>
              <ScrubWords className="mt-4 max-w-2xl text-3xl font-medium leading-snug tracking-heading text-ink sm:text-4xl">
                Visitors decide whether to trust you in seconds — before your features, before your pricing. Most products lose them right there.
              </ScrubWords>
            </div>

            {/* Right Animation Section */}
            <div className="relative flex flex-1 items-center justify-center">
              <Parallax amount={50}>
                <div className="max-w-[300px] rotate-[-8deg] md:max-w-[360px] lg:max-w-[380px]">
                  <FadeTextComp />
                </div>
              </Parallax>
            </div>
          </div>

          <div className="flex w-full flex-col gap-12 lg:flex-row">
            {/* Problem Section */}
            <FadeIn className="flex flex-1 flex-col gap-4">
              <h3 className="font-gloria text-lg md:text-xl font-light text-muted leading-tight tracking-tight">
                What it looks like
              </h3>
              <div className="flex flex-wrap gap-4">
                <CardList />
              </div>
            </FadeIn>

            {/* Solution Section */}
            <FadeIn delay={0.15} className="flex flex-1 flex-col gap-4">
              <h3 className="font-gloria text-lg md:text-xl font-light text-muted leading-tight tracking-tight">
                What I change
              </h3>
              <div className="flex flex-wrap gap-4">
                <SuccessCardList />
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProblemSolution;
