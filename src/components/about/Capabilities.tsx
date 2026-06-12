import React from "react";
import Container from "../widgets/Container";
import SceneTitle from "../widgets/SceneTitle";
import { FadeIn } from "../motion/SplitReveal";

const TOOL_GROUPS = [
  {
    idx: "01",
    title: "Design",
    items: "Figma · Illustrator · Photoshop · Miro",
  },
  {
    idx: "02",
    title: "Front-end",
    items: "HTML · CSS / Sass · JavaScript · React · Next.js · TypeScript",
  },
  {
    idx: "03",
    title: "Back-end",
    items: "Node.js · Python · Django · GraphQL · PostgreSQL",
  },
  {
    idx: "04",
    title: "Tooling",
    items: "Git / GitHub · Docker",
  },
];

/**
 * About scene 04 — tools and capabilities as an index list, matching the
 * homepage's CapabilityIndex pattern.
 */
const Capabilities = () => {
  return (
    <section className="border-b border-line700 bg-coal">
      <Container>
        <div className="flex flex-col gap-16 py-24 sm:py-32">
          <SceneTitle index="04" name="Tools" title="What I" accent="use" />

          <div className="flex flex-col">
            {TOOL_GROUPS.map((g, i) => (
              <FadeIn key={g.idx} delay={i * 0.06} y={24}>
                <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2 border-t border-line700 py-8 sm:grid-cols-[3rem_1fr_auto] sm:py-10">
                  <span className="font-mono text-sm text-ink-dim">{g.idx}</span>
                  <h3 className="text-display tracking-display text-[clamp(1.8rem,3.6vw,3.4rem)] leading-none">
                    {g.title}
                  </h3>
                  <p className="label col-start-2 sm:col-start-3 sm:self-center">
                    {g.items}
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

export default Capabilities;
