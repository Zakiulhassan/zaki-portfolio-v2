import React from "react";
import Container from "../widgets/Container";
import SceneTitle from "../widgets/SceneTitle";
import { FadeIn } from "../motion/SplitReveal";

const ROLES = [
  {
    role: "Full Stack Developer & Designer",
    company: "Techanzy Limited",
    year: "2024 — Present",
  },
  {
    role: "Freelance Designer & Developer",
    company: "Remote",
    year: "2018 — Present",
  },
  {
    role: "Graphics & UI/UX Designer",
    company: "Pixelpk Technologies",
    year: "2022 — 2024",
  },
  {
    role: "Packaging Designer",
    company: "Biotech Packages Pvt Ltd.",
    year: "2021 — 2022",
  },
  {
    role: "Graphic Designer",
    company: "Star Printing",
    year: "2019 — 2021",
  },
];

/**
 * About scene 03 — career timeline as an editorial index, not cards.
 */
const Timeline = () => {
  return (
    <section className="border-b border-line700 bg-coal-soft">
      <Container>
        <div className="flex flex-col gap-16 py-24 sm:py-32">
          <SceneTitle index="03" name="Timeline" title="Where I've" accent="worked" />

          <div className="flex flex-col">
            {ROLES.map((r, i) => (
              <FadeIn key={r.role} delay={i * 0.05} y={24}>
                <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-1 border-t border-line700 py-7 sm:grid-cols-[3rem_1fr_auto]">
                  <span className="font-mono text-sm text-ink-dim">{`0${i + 1}`}</span>
                  <h3 className="text-xl font-semibold tracking-heading leading-snug sm:text-2xl">
                    {r.role}
                  </h3>
                  <span className="col-start-2 text-sm text-ink-dim sm:col-start-3 sm:text-right">
                    {r.company} · {r.year}
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

export default Timeline;
