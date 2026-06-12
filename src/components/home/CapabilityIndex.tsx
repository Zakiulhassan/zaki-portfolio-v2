import React from "react";
import Link from "next/link";
import Container from "../widgets/Container";
import SceneTitle from "../widgets/SceneTitle";
import { FadeIn } from "../motion/SplitReveal";

const CAPABILITIES = [
  {
    idx: "01",
    title: "Brand Identity",
    items: "Positioning · Identity systems · Guidelines",
  },
  {
    idx: "02",
    title: "Product Design",
    items: "Research · Flows · Interface design · Prototypes",
  },
  {
    idx: "03",
    title: "Design Systems",
    items: "Tokens · Components · Documentation",
  },
  {
    idx: "04",
    title: "Front-end Build",
    items: "Next.js · React · Motion · Accessibility",
  },
];

/**
 * Scene 06 — capability index. What I actually do, as an index list
 * with one CTA at the end. No pricing cards, no checklists.
 */
const CapabilityIndex = () => {
  return (
    <section className="border-t border-line700 bg-coal">
      <Container>
        <div className="flex flex-col gap-16 py-28 sm:py-36">
          <SceneTitle index="06" name="Capabilities" title="What I" accent="do" />

          <div className="flex flex-col">
            {CAPABILITIES.map((c, i) => (
              <FadeIn key={c.idx} delay={i * 0.06} y={24}>
                <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2 border-t border-line700 py-8 sm:grid-cols-[3rem_1fr_auto] sm:py-10">
                  <span className="font-mono text-sm text-ink-dim">{c.idx}</span>
                  <h3 className="text-display tracking-display text-[clamp(1.8rem,3.6vw,3.4rem)] leading-none">
                    {c.title}
                  </h3>
                  <p className="label col-start-2 sm:col-start-3 sm:self-center">
                    {c.items}
                  </p>
                </div>
              </FadeIn>
            ))}
            <div className="border-t border-line700" />
          </div>

          <FadeIn className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-sm text-base leading-relaxed text-ink-dim">
              One person from strategy to ship — nothing gets lost in handoff.
            </p>
            <Link href="/book-a-call" data-cursor="hover" className="btn btn-primary">
              Book a strategy call
            </Link>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};

export default CapabilityIndex;
