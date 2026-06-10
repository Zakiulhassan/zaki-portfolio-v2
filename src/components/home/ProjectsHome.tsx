import React from "react";
import Container from "../widgets/Container";
import TextMarquee from "../motion/TextMarquee";
import Image from "next/image";
import { FadeIn } from "../motion/SplitReveal";

const ProjectsHome = () => {
  return (
    <section className="relative bg-coal pt-24 pb-12">
      <Container>
        <div className="flex flex-col gap-12">
          <FadeIn className="rail">
            <span className="idx">01</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-heading leading-tight">
              Selected Work
            </h2>
            <span className="tick"></span>
          </FadeIn>

          <FadeIn className="grid gap-6 md:grid-cols-3" y={60}>
            {[
              { src: "/cleanly-home.png", label: "Cleanly" },
              { src: "/furnium-website.png", label: "Furnium" },
              { src: "/rivo-app.png", label: "Rivo" },
            ].map((p, i) => (
              <div
                key={i}
                data-cursor="hover"
                className="group relative aspect-[4/3] overflow-hidden rounded border border-line700"
              >
                <Image
                  src={p.src}
                  alt={p.label}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coal/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-sm uppercase tracking-[0.3em] text-ink">
                  {p.label}
                </span>
              </div>
            ))}
          </FadeIn>
        </div>
      </Container>

      <div className="mt-16 border-y border-white/10">
        <TextMarquee baseSpeed={55} direction={-1} className="py-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="mx-6 flex items-center gap-6 text-display text-3xl text-ink-dim sm:text-5xl"
            >
              Design
              <span className="text-acid">&middot;</span>
              Development
              <span className="text-acid">&middot;</span>
              Strategy
            </span>
          ))}
        </TextMarquee>
      </div>
    </section>
  );
};

export default ProjectsHome;
