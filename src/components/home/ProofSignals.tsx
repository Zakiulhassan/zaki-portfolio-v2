import React from "react";
import Container from "../widgets/Container";
import { FadeIn } from "../motion/SplitReveal";
import CountUp from "../motion/CountUp";

const RESULTS = [
  {
    value: 200,
    suffix: "%",
    text: "Faster booking flow completion for Cleanly's customers and admins.",
    project: "Cleanly, 2024",
  },
  {
    value: 150,
    suffix: "%",
    text: "More engagement after Furnium's storefront redesign shipped.",
    project: "Furnium, 2024",
  },
  {
    value: 120,
    suffix: "%",
    text: "Lift in checkout completion from Rivo's redesigned product flow.",
    project: "Rivo, 2023",
  },
];

/**
 * Scene 07 — proof signals. Results pulled from shipped case studies,
 * set as an editorial index with no cards, no avatars, no quotes.
 */
const ProofSignals = () => {
  return (
    <section className="border-t border-line700 bg-coal">
      <Container>
        <div className="flex flex-col gap-20 py-28 sm:py-36">
          <p className="label">
            07 <span className="text-acid">/</span> Proof
          </p>

          <div className="grid grid-cols-1 gap-16 sm:grid-cols-3 sm:gap-10">
            {RESULTS.map((r, i) => (
              <FadeIn key={r.project} delay={i * 0.1} y={28}>
                <div className="flex flex-col gap-4 border-t border-line700 pt-8">
                  <p className="text-display tracking-display text-[clamp(2.4rem,5vw,4rem)] leading-none text-ink">
                    <CountUp value={r.value} suffix={r.suffix} />
                  </p>
                  <p className="max-w-xs text-base leading-relaxed text-ink-dim">
                    {r.text}
                  </p>
                  <span className="label !text-ink-dim/70">{r.project}</span>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="self-end">
            <p className="label">Working with startups &amp; product teams since 2018</p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};

export default ProofSignals;
