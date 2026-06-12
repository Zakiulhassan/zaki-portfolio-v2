import React from "react";
import Image from "next/image";
import Container from "../widgets/Container";
import { SplitReveal, FadeIn } from "../motion/SplitReveal";

/**
 * About scene 01 — opening statement. Large editorial introduction with
 * a small portrait, no card frame, no avatar grid.
 */
const AboutHero = () => {
  return (
    <section className="border-b border-line700 bg-coal pt-32 lg:pt-40">
      <Container>
        <div className="flex flex-col gap-12 pb-24 sm:pb-32">
          <p className="label">
            01 <span className="text-acid">/</span> About
          </p>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <h1
              aria-label="I design digital products, then I build them."
              className="text-display tracking-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[1.05]"
            >
              <span aria-hidden="true">
                <SplitReveal as="span" mode="words" immediate className="inline">
                  I design digital products,
                </SplitReveal>{" "}
                <SplitReveal
                  as="span"
                  mode="words"
                  immediate
                  delay={0.12}
                  className="inline font-serif font-normal italic tracking-normal"
                >
                  then I build them.
                </SplitReveal>
              </span>
            </h1>
            <FadeIn delay={0.3} className="overflow-hidden border border-line700">
              <Image
                src="/zaki-headshot.webp"
                alt="Zaki ul Hassan"
                width={878}
                height={869}
                priority
                className="aspect-square w-full object-cover"
              />
            </FadeIn>
          </div>
          <FadeIn delay={0.2} className="max-w-2xl">
            <p className="text-base leading-relaxed text-ink-dim sm:text-lg">
              Working across SaaS, e-commerce, and service platforms since 2018 —
              from print floors to product teams. One person owning both the
              design and the code keeps me honest about what actually ships.
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};

export default AboutHero;
