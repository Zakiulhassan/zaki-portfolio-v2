import React from "react";
import ProjectPlanCard from "../widgets/ProjectPlanCard";
import Container from "../widgets/Container";

const cardData = [
  {
    title: "UX Design: Crafting User-Centric Experiences.",
    description:
      "Create intuitive, visually compelling designs that captivate users and drive engagement, focusing on seamless and meaningful interactions.",
    buttonText: "Book a strategy call",
    buttonLink: "#",
    durationText: "2-3 Weeks",
    listItems: [
      "User Research & Personas.",
      "Wireframing & Prototyping.",
      "Information Architecture.",
      "Visual Design.",
      "Usability Testing.",
    ],
    colorHeading: "#fff",
    colorText: "#E4E7DC",
    btnColorFrom: "#C6FE1E",
    btnColorTo: "#2BFD86",
    bgColorFrom: "#242524",
    bgColorTo: "#242524",
    beamColorFrom: "#C6FE1E",
    beamColorTo: "#2BFD86",
  },
  {
    title: "UX Development: Bringing Designs to Life.",
    description:
      "Transform designs into responsive, optimized digital products, ensuring seamless user experiences across all devices.",
    buttonText: "Book a strategy call",
    buttonLink: "#",
    durationText: "4-6 Weeks",
    listItems: [
      "Responsive Web Development.",
      "Performance Optimization.",
      "Interactive Prototyping.",
      "Accessibility Compliance.",
      "Cross-Browser Compatibility.",
    ],
    colorHeading: "#fff",
    colorText: "#E4E7DC",
    btnColorFrom: "#C6FE1E",
    btnColorTo: "#2BFD86",
    bgColorFrom: "#242524",
    bgColorTo: "#242524",
    beamColorFrom: "#C6FE1E",
    beamColorTo: "#2BFD86",
  },
  {
    title: "Product Launch: From Vision to Reality.",
    description:
      "Deliver end-to-end digital solutions by merging intuitive design with flawless development for a cohesive user experience.",
    buttonText: "Book a strategy call",
    buttonLink: "#",
    durationText: "4-6 Weeks",
    listItems: [
      "UI/UX Design & Branding.",
      "Full-Stack Development .",
      "API & Third-Party Integration.",
      "Scalability & Performance Optimization.",
      "Launch & Post-Launch Support.",
    ],
    colorHeading: "#10110F",
    colorText: "#10110F",
    btnColorFrom: "#fff",
    btnColorTo: "#fff",
    bgColorFrom: "#C6FE1E",
    bgColorTo: "#2BFD86",
    beamColorFrom: "#ffffff",
    beamColorTo: "#ffffff",
  },
];

const ProjectPlans = () => {
  return (
    <section className="bg-coal min-h-screen">
      <Container>
        <div className="flex flex-col gap-12 px-4 py-12 sm:px-8 sm:py-16 lg:px-24 lg:py-24">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="rail w-full md:w-auto">
              <span className="idx">03</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-heading leading-tight max-w-xl">
                Your project deserves more than just a{" "}
                <span className="text-acid">pretty</span> interface. It needs
                results!
              </h2>
              <span className="tick"></span>
            </div>
            <p className="text-base sm:text-lg lg:text-xl max-w-xl md:max-w-xs text-center md:text-right text-ink-dim leading-tight">
              Pick the service that fits your needs. I&apos;ve got you covered.
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
          <p className="font-gloria text-lg sm:text-xl lg:text-2xl text-center text-secondary leading-tight tracking-tight">
            Ready to see what{" "}
            <span className="hover:text-greenPri">great design</span> can do for
            your business?
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ProjectPlans;
