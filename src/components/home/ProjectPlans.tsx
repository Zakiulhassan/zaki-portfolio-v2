import React from "react";
import ProjectPlanCard from "../widgets/ProjectPlanCard";
import Container from "../widgets/Container";
import { FadeIn } from "../motion/SplitReveal";
import RevealTick from "../motion/RevealTick";

const cardData = [
  {
    index: "01",
    title: "UX/UI Design",
    description:
      "Research, flows, and interface design that remove the friction between your users and the value you already built.",
    buttonText: "Book a strategy call",
    buttonLink: "/book-a-call",
    durationText: "2-3 weeks",
    listItems: [
      "User research & personas",
      "Wireframes & prototypes",
      "Information architecture",
      "Interface design",
      "Usability testing",
    ],
  },
  {
    index: "02",
    title: "Design + Development",
    description:
      "I design it, then I build it in React and Next.js. Nothing gets lost in handoff, because there isn't one.",
    buttonText: "Book a strategy call",
    buttonLink: "/book-a-call",
    durationText: "4-6 weeks",
    listItems: [
      "Responsive web development",
      "Performance optimization",
      "Interactive prototyping",
      "Accessibility compliance",
      "Cross-browser support",
    ],
  },
  {
    index: "03",
    title: "Product Launch",
    description:
      "The full build for something new: brand, interface, frontend, backend, and the launch itself.",
    buttonText: "Book a strategy call",
    buttonLink: "/book-a-call",
    durationText: "4-6 weeks",
    listItems: [
      "UI/UX design & branding",
      "Full-stack development",
      "API & third-party integration",
      "Scalability & performance",
      "Launch & post-launch support",
    ],
  },
];

const ProjectPlans = () => {
  return (
    <section className="border-t border-line700 bg-coal">
      <Container>
        <div className="flex flex-col gap-12 py-24 sm:py-32">
          {/* Header Section */}
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="rail w-full md:w-auto">
              <span className="idx">04</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-heading leading-tight max-w-xl">
                Three ways to <span className="text-acid">work</span> together
              </h2>
              <RevealTick />
            </div>
            <p className="max-w-md text-base text-ink-dim sm:text-lg md:text-right">
              Defined scope, defined timeline, deliverables you can ship —
              pick the one that matches where you are.
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardData.map((card, index) => (
              <FadeIn key={index} delay={index * 0.1} y={40}>
                <ProjectPlanCard
                  index={card.index}
                  title={card.title}
                  description={card.description}
                  buttonText={card.buttonText}
                  buttonLink={card.buttonLink}
                  durationText={card.durationText}
                  listItems={card.listItems}
                />
              </FadeIn>
            ))}
          </div>

          {/* Footer Section */}
          <p className="mx-auto max-w-2xl text-center text-lg leading-snug text-ink-dim sm:text-xl">
            Not sure which one fits? Book the call anyway — I&apos;ll tell you
            what I&apos;d do, and the plan is yours either way.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ProjectPlans;
