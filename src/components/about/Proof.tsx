import React from "react";
import Container from "../widgets/Container";
import SceneTitle from "../widgets/SceneTitle";
import { FadeIn } from "../motion/SplitReveal";

const CREDENTIALS = [
  {
    title: "User Experience (UX) Design",
    issuer: "Google",
    year: "2024",
  },
  {
    title: "Certified MERN Developer",
    issuer: "Knowledge Stream",
    year: "2024",
  },
  {
    title: "Principles of Design",
    issuer: "IBM SkillBuild",
    year: "2024",
  },
  {
    title: "User Experience Design Fundamentals",
    issuer: "IBM SkillBuild",
    year: "2020 — 2022",
  },
  {
    title: "Graphic Design",
    issuer: "Digiskills.pk",
    year: "2020",
  },
];

/**
 * About scene 05 — credentials as a quiet editorial index.
 */
const Proof = () => {
  return (
    <section className="border-b border-line700 bg-coal-soft">
      <Container>
        <div className="flex flex-col gap-16 py-24 sm:py-32">
          <SceneTitle index="05" name="Proof" title="What I've" accent="studied" />

          <div className="flex flex-col">
            {CREDENTIALS.map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.05} y={24}>
                <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-1 border-t border-line700 py-7 sm:grid-cols-[3rem_1fr_auto]">
                  <span className="font-mono text-sm text-ink-dim">{`0${i + 1}`}</span>
                  <h3 className="text-lg font-semibold tracking-heading leading-snug sm:text-xl">
                    {c.title}
                  </h3>
                  <span className="col-start-2 text-sm text-ink-dim sm:col-start-3 sm:text-right">
                    {c.issuer} · {c.year}
                  </span>
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

export default Proof;
