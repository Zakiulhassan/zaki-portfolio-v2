import React from 'react'
import ProjectPlanCard from '../widgets/ProjectPlanCard'
import Container from '../widgets/Container';

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

    colorHeading: "#10110F",
    colorText: "#6C7267",

    btnColorFrom: "#03BC74",
    btnColorTo: "#67DF72",
    bgColorFrom: "#ffffff",
    bgColorTo: "#ffffff",
    beamColorFrom: "#03BC74",
    beamColorTo: "#67DF72",
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
    colorHeading: "#10110F",
    colorText: "#6C7267",

    btnColorFrom: "#03BC74",
    btnColorTo: "#67DF72",
    bgColorFrom: "#ffffff",
    bgColorTo: "#ffffff",
    beamColorFrom: "#03BC74",
    beamColorTo: "#67DF72",
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
    colorHeading: "#ffffff",
    colorText: "#10110F",

    btnColorFrom: "#fff",
    btnColorTo: "#fff",
    bgColorFrom: "#03BC74",
    bgColorTo: "#67DF72",
    beamColorFrom: "#ffffff",
    beamColorTo: "#ffffff",
  },
];

const ProjectPlans = () => {
  return (
    <section>
      <Container>
        <div className='flex flex-col gap-12'>
          <div className='flex justify-center md:justify-between items-center flex-col md:flex-row gap-4'>
                <h1 className='text-2xl max-w-xl md:max-w-xl text-center md:text-left font-bricolage font-bold mb-2 leading-tight'><span className='text-greenPri'>Your project</span> deserves more than just a <span className='text-greenPri'>pretty interface.</span> It needs results!</h1>
                <p className='font-gloria text-lg max-w-xl md:max-w-xs text-center md:text-right text-secondary leading-tight tracking-tight'><span className='text-primary hover:text-greenPri'>Pick the service</span> that fits your needs. I&apos;ve got you covered.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            {cardData.map((card, index) => (
              <ProjectPlanCard
                key={index} // Add a unique key for each card
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
          <p className='font-gloria text-lg text-center text-secondary leading-tight tracking-tight'>Ready to see what <span className='text-primary hover:text-greenPri'>great design</span> can do for your business?</p>
        </div>
      </Container>
    </section>
  )
}

export default ProjectPlans