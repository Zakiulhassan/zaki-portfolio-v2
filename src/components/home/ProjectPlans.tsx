import React from "react";
import ProjectPlanCard from "../widgets/ProjectPlanCard";
import Container from "../widgets/Container";
import RevealTick from "../motion/RevealTick";

const cardData = [
  {
    title: "UX/UI Design — for products that work but feel hard to use.",
    description:
      "Research, flows, and interface design that remove the friction between your users and the value you already built.",
    buttonText: "Book a strategy call",
    buttonLink: "/book-a-call",
    durationText: "2-3 Weeks",
    listItems: [
      "User research & personas.",
      "Wireframes & prototypes.",
      "Information architecture.",
      "Interface design.",
      "Usability testing.",
    ],
    colorHeading: "#fff",
    colorText: "#E4E7DC",
    btnColorFrom: "#C6FE1E",
    btnColorTo: "#C6FE1E",
    bgColorFrom: "#242524",
    bgColorTo: "#242524",
    beamColorFrom: "#C6FE1E",
    beamColorTo: "#A8DB12",
  },
  {
    title: "Design + Development — one person from Figma to production.",
    description:
      "I design it, then I build it in React and Next.js. Nothing gets lost in handoff, because there isn't one.",
    buttonText: "Book a strategy call",
    buttonLink: "/book-a-call",
    durationText: "4-6 Weeks",
    listItems: [
      "Responsive web development.",
      "Performance optimization.",
      "Interactive prototyping.",
      "Accessibility compliance.",
      "Cross-browser support.",
    ],
    colorHeading: "#fff",
    colorText: "#E4E7DC",
    btnColorFrom: "#C6FE1E",
    btnColorTo: "#C6FE1E",
    bgColorFrom: "#242524",
    bgColorTo: "#242524",
    beamColorFrom: "#C6FE1E",
    beamColorTo: "#A8DB12",
  },
  {
    title: "Product Launch — from first wireframe to live product.",
    description:
      "The full build for something new: brand, interface, frontend, backend, and the launch itself.",
    buttonText: "Book a strategy call",
    buttonLink: "/book-a-call",
    durationText: "4-6 Weeks",
    listItems: [
      "UI/UX design & branding.",
      "Full-stack development.",
      "API & third-party integration.",
      "Scalability & performance.",
      "Launch & post-launch support.",
    ],
    colorHeading: "#fff",
    colorText: "#E4E7DC",
    btnColorFrom: "#C6FE1E",
    btnColorTo: "#C6FE1E",
    bgColorFrom: "#242524",
    bgColorTo: "#242524",
    beamColorFrom: "#C6FE1E",
    beamColorTo: "#A8DB12",
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
                Hire me for the part that&apos;s{" "}
                <span className="text-acid">blocking</span> you.
              </h2>
              <RevealTick />
            </div>
            <p className="max-w-md text-base text-ink-dim sm:text-lg md:text-right">
              Three ways to work together. Defined scope, defined timeline,
              deliverables you can ship.
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardData.map((card, index) => (
              <ProjectPlanCard
                key={index}
                title={card.title}
                description={card.description}
                buttonText={card.buttonText}
                buttonLink={card.buttonLink}
                durationText={card.durationText}
                listItems={card.listItems}
                btnColorFrom={card.btnColorFrom}
                btnColorTo={card.btnColorTo}
                bgColorFrom={card.bgColorFrom}
                colorHeading={card.colorHeading}
                colorText={card.colorText}
                bgColorTo={card.bgColorTo}
                beamColorFrom={card.beamColorFrom}
                beamColorTo={card.beamColorTo}
              />
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
