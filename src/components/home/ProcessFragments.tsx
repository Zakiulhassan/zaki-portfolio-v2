import React from "react";
import Container from "../widgets/Container";
import SceneTitle from "../widgets/SceneTitle";
import { FadeIn } from "../motion/SplitReveal";
import ParallaxImage from "../motion/ParallaxImage";

const FRAGMENTS = [
  { idx: "01", caption: "Audit notes", src: "/case-studies/cleanly-hero.png" },
  { idx: "02", caption: "Strategy map", src: "/furnium-header.png" },
  { idx: "03", caption: "Wireframes", src: "/furnium-solution.png" },
  { idx: "04", caption: "Visual system", src: "/case-studies/rivo-hero.png" },
  { idx: "05", caption: "Shipped interface", src: "/cleanly-home.png" },
];

/**
 * Scene 05 — process fragments. The middle of the work, shown as
 * artifacts in thin editorial frames rather than a four-step diagram.
 */
const ProcessFragments = () => {
  return (
    <section id="process" className="border-t border-line700 bg-coal">
      <Container>
        <div className="flex flex-col gap-16 py-28 sm:py-36">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SceneTitle index="05" name="Process" title="The work" accent="between" />
            <FadeIn>
              <p className="max-w-xs text-base leading-relaxed text-ink-dim md:text-right">
                The middle of a project is rarely shown. Here it is.
              </p>
            </FadeIn>
          </div>

          <div className="-mx-4 flex snap-x gap-5 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-5 md:gap-5 md:overflow-visible md:px-0 md:pb-0">
            {FRAGMENTS.map((f, i) => (
              <FadeIn
                key={f.idx}
                delay={i * 0.07}
                y={32}
                className={`w-[62vw] shrink-0 snap-start sm:w-[40vw] md:w-auto ${
                  i % 2 === 1 ? "md:mt-16" : ""
                } ${i === 2 ? "md:-mt-8" : ""}`}
              >
                <figure className="group flex flex-col gap-3 transition-transform duration-slow ease-brand hover:-translate-y-2">
                  <div className="overflow-hidden border border-line700">
                    <ParallaxImage
                      src={f.src}
                      alt={f.caption}
                      sizes="(min-width: 768px) 20vw, 60vw"
                      className={`w-full grayscale transition-[filter] duration-slow ease-brand group-hover:grayscale-0 ${
                        i % 2 === 1 ? "aspect-[3/5]" : "aspect-[3/4]"
                      }`}
                    />
                  </div>
                  <figcaption className="label">
                    {f.idx} — {f.caption}
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProcessFragments;
