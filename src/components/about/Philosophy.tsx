import React from "react";
import Container from "../widgets/Container";
import SceneTitle from "../widgets/SceneTitle";
import { FadeIn } from "../motion/SplitReveal";

const PRINCIPLES = [
  {
    idx: "01",
    title: "Design and code, one person.",
    line: "Nothing gets lost in handoff because there is no handoff.",
  },
  {
    idx: "02",
    title: "Constraints first, ideas second.",
    line: "Give me the real limits — budget, timeline, tech — and the ideas get sharper, not smaller.",
  },
  {
    idx: "03",
    title: "Show the reasoning, not just the screen.",
    line: "Every decision has a reason a stakeholder can repeat back without me in the room.",
  },
  {
    idx: "04",
    title: "Ship, then sharpen.",
    line: "A live product teaches more in a week than a prototype does in a month.",
  },
];

/**
 * About scene 02 — working philosophy, as a numbered editorial list.
 */
const Philosophy = () => {
  return (
    <section className="border-b border-line700 bg-coal">
      <Container>
        <div className="flex flex-col gap-16 py-24 sm:py-32">
          <SceneTitle index="02" name="Philosophy" title="How I" accent="work" />

          <div className="flex flex-col">
            {PRINCIPLES.map((p, i) => (
              <FadeIn key={p.idx} delay={i * 0.06} y={24}>
                <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2 border-t border-line700 py-8 sm:grid-cols-[3rem_1fr_1fr] sm:py-10">
                  <span className="font-mono text-sm text-ink-dim">{p.idx}</span>
                  <h3 className="text-2xl font-semibold tracking-heading leading-snug sm:text-3xl lg:text-4xl">
                    {p.title}
                  </h3>
                  <p className="col-start-2 max-w-sm text-base leading-relaxed text-ink-dim sm:col-start-3 sm:justify-self-end sm:text-right">
                    {p.line}
                  </p>
                </div>
              </FadeIn>
            ))}
            <div className="border-t border-line700" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Philosophy;
