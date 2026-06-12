import React from "react";
import Container from "../widgets/Container";
import SceneTitle from "../widgets/SceneTitle";
import { FadeIn } from "../motion/SplitReveal";

const BELIEFS = [
  {
    idx: "01",
    title: "Confusing products lose customers.",
    line: "Every unclear screen, label, or step is a measurable cost — in drop-off, support tickets, or a sale that doesn't happen.",
  },
  {
    idx: "02",
    title: "Clarity beats cleverness.",
    line: "If the user has to think about the interface, the interface failed.",
  },
  {
    idx: "03",
    title: "Systems outlive screens.",
    line: "Design the rules well and the next hundred screens design themselves.",
  },
  {
    idx: "04",
    title: "Motion is information.",
    line: "Animation that doesn't explain something is decoration.",
  },
];

/**
 * Scene 04 — design beliefs. A numbered editorial list, no cards,
 * each belief one confident line with one quiet explanation.
 */
const Beliefs = () => {
  return (
    <section className="border-t border-line700 bg-coal">
      <Container>
        <div className="flex flex-col gap-16 py-28 sm:py-36">
          <SceneTitle index="04" name="Design beliefs" title="What I" accent="believe" />

          <div className="flex flex-col">
            {BELIEFS.map((b, i) => (
              <FadeIn key={b.idx} delay={i * 0.06} y={24}>
                <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2 border-t border-line700 py-8 sm:grid-cols-[3rem_1fr_1fr] sm:py-10">
                  <span className="font-mono text-sm text-ink-dim">{b.idx}</span>
                  <h3 className="text-2xl font-semibold tracking-heading leading-snug sm:text-3xl lg:text-4xl">
                    {b.title}
                  </h3>
                  <p className="col-start-2 max-w-sm text-base leading-relaxed text-ink-dim sm:col-start-3 sm:justify-self-end sm:text-right">
                    {b.line}
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

export default Beliefs;
