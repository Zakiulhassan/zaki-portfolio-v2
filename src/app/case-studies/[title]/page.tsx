"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// Define TypeScript interfaces
interface Stat {
  percentage: string;
  text: string;
}

interface CaseStudy {
  id: number;
  author: string;
  authorImg: string;
  title1: string;
  title: string;
  description: string;
  stats: Stat[];
  imageSrc: string;
  HeroImage: string;
  imagesGallery: string[];
  tag: string[];
  imageOnRight: boolean;
  role?: string[];
  deliverables?: string[];
  team?: string[];
  year?: string;
  detailedDescription?: string;
  challenge?: string;
  solution?: string;
}

// Using the same case studies data
const caseStudies: CaseStudy[] = [
  {
    id: 1,
    author: "View case study",
    authorImg: "/logo.png",
    title1: "cleanly",
    title: "Cleanly - Website and Dashboard Design and Development",
    description: "Cleanly is a home and office cleaning service platform that offers on-demand, professional cleaning services. Their goal is to provide a seamless, user-friendly booking experience while ensuring high-quality cleaning services for both residential and commercial clients.",
    stats: [
      { percentage: "200%", text: "Increase in satisfaction resulting to customer onboarding efficiency." },
      { percentage: "70%", text: "Visits suggests increased customization interest." }
    ],
    imageSrc: "/cleanly-home.png",
    HeroImage: "/case-studies/cleanly-hero.png",
    imagesGallery: ["/furnium-website.png", "/furnium-website.png", "/furnium-website.png"],
    tag: ["UI/UX Design", "Full Stack Development", "React.JS", "Next.JS", "Python Django"],
    imageOnRight: false,
    role: ["Design Lead", "Full Stack Developer"],
    deliverables: ["Website Design", "Dashboard Development", "User Flow Optimization"],
    team: ["UI/UX Designer", "Frontend Developer", "Backend Developer"],
    year: "2023 - Present",
    detailedDescription: `As the lead designer and developer for Cleanly, I spearheaded the creation of an intuitive booking platform that revolutionized how users schedule and manage cleaning services. The project focused on streamlining the user journey while ensuring robust functionality for both customers and service providers.`,
    challenge: `The main challenge was creating a seamless booking experience that could handle complex scheduling requirements while maintaining simplicity for users. We needed to balance feature-rich functionality with an intuitive interface that wouldn't overwhelm users.`,
    solution: `We implemented a step-by-step booking process with real-time availability checking and integrated a sophisticated scheduling system. The dashboard was designed to provide clear visibility of upcoming services, cleaning history, and easy management of recurring bookings.`
  },
  {
    id: 2,
    author: "View case study",
    authorImg: "/logo.png",
    title1: "furnium",
    title: "Furnium - A Furniture E-commerce Platform UI/UX Design",
    description: "Furnium is a contemporary furniture brand that focuses on sleek, minimalist designs. The goal was to create an e-commerce platform reflecting Furnium's modern aesthetic, ensuring a seamless and intuitive shopping experience for customers.",
    stats: [
      { percentage: "150%", text: "Increase in user engagement on the site, driven by intuitive design and high-quality visuals." },
      { percentage: "95%", text: "Positive feedback from users on the seamless navigation and clean layout." }
    ],
    imageSrc: "/furnium-website.png",
    HeroImage: "/case-studies/furnium-hero.png",
    imagesGallery: ["/furnium-website.png", "/furnium-website.png", "/furnium-website.png"],
    tag: ["UI/UX Design", "User Research", "Responsive Design"],
    imageOnRight: true,
    role: ["UX Designer", "Research Lead"],
    deliverables: ["E-commerce Platform Design", "User Research Report", "Design System"],
    team: ["UI/UX Designer", "User Researcher", "Product Manager"],
    year: "2023",
    detailedDescription: `Leading the design of Furnium's e-commerce platform involved creating an experience that matched their premium brand while ensuring intuitive navigation and seamless purchasing flows.`,
    challenge: `The challenge was balancing aesthetic appeal with functional e-commerce requirements, ensuring the platform could effectively showcase furniture while maintaining fast load times and easy navigation.`,
    solution: `We developed a minimal yet effective design system that prioritized product imagery while maintaining clear navigation and purchase paths. The implementation included advanced filtering and search capabilities.`
  },
  {
    id: 3,
    author: "View case study",
    authorImg: "/logo.png",
    title1: "rivo",
    title: "Rivo - An E-commerce Tech Store Platform UI/UX Design",
    description: "Rivo is an innovative e-commerce platform aimed at providing a superior online shopping experience. The project involved creating a user interface that supported advanced features while delivering a seamless and intuitive user journey.",
    stats: [
      { percentage: "120%", text: "Increase in user engagement due to personalized shopping experiences." },
      { percentage: "80%", text: "Improvement in repeat purchases as a result of tailored product recommendations." }
    ],
    imageSrc: "/rivo-app.png",
    HeroImage: "/case-studies/rivo-hero.png",
    imagesGallery: ["/furnium-website.png", "/furnium-website.png", "/furnium-website.png"],
    tag: ["UI/UX Design", "User Research"],
    imageOnRight: false,
    role: ["UI Designer", "UX Researcher"],
    deliverables: ["Platform Design", "User Testing Reports", "Interactive Prototypes"],
    team: ["UI Designer", "UX Researcher", "Product Owner"],
    year: "2023",
    detailedDescription: `For Rivo, we focused on creating a tech-forward e-commerce experience that caters to both tech-savvy users and those new to online tech shopping.`,
    challenge: `The main challenge was creating an interface that could handle complex product specifications and comparisons while maintaining an approachable and non-intimidating shopping experience.`,
    solution: `We implemented an advanced yet user-friendly product comparison system and created intuitive category navigation that helps users find exactly what they're looking for without feeling overwhelmed.`
  }
];

interface PageProps {
  params: {
    title: string;
  };
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const CaseStudyDetail: React.FC<PageProps> = ({ params }) => {
  // Find the case study based on the URL parameter
  const caseStudy = caseStudies.find(study => study.title1 === params.title);
  console.log("params", params)

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-coal text-ink">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-heading mb-4">Case study not found</h1>
          <Link href="/case-studies" className="btn-ghost">
            <span className="arr">←</span> Back to case studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-coal min-h-screen text-ink pt-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/case-studies" className="btn-ghost">
            <span className="arr">←</span> Back to case studies
          </Link>
        </div>

        {/* Title Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mb-8"
        >
          <div className="label green mb-2">{caseStudy.title1}</div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-heading mb-4 text-ink">{caseStudy.title}</h1>
          <div className="flex flex-wrap gap-2">
            {caseStudy.tag.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mb-12"
        >
          <div className="border border-line700 overflow-hidden">
            <Image
              src={caseStudy.HeroImage}
              alt="Project Preview"
              width={1400}
              height={600}
              priority
              className="w-full object-cover"
            />
          </div>
        </motion.div>

        {/* Project Info Grid */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16 border-y border-line700 py-8"
        >
          <div>
            <h3 className="label green mb-4">My role</h3>
            <ul className="space-y-2">
              {caseStudy.role?.map((position, index) => (
                <li key={index} className="text-ink-dim text-sm">{position}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="label green mb-4">Deliverables</h3>
            <ul className="space-y-2">
              {caseStudy.deliverables?.map((deliverable, index) => (
                <li key={index} className="text-ink-dim text-sm">{deliverable}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="label green mb-4">Team</h3>
            <ul className="space-y-2">
              {caseStudy.team?.map((member, index) => (
                <li key={index} className="text-ink-dim text-sm">{member}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="label green mb-4">Year</h3>
            <p className="text-ink-dim text-sm">{caseStudy.year}</p>
          </div>
        </motion.div>

        {/* Project Description */}
        <motion.section
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mb-16"
        >
          <h2 className="label green mb-4">Project overview</h2>
          <p className="text-ink-dim mb-6 leading-relaxed">{caseStudy.description}</p>
          <p className="text-ink-dim mb-6 leading-relaxed">{caseStudy.detailedDescription}</p>
        </motion.section>

        {/* Challenge & Solution */}
        <motion.section
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div>
            <h2 className="label green mb-4">The challenge</h2>
            <p className="text-ink-dim leading-relaxed">{caseStudy.challenge}</p>
          </div>
          <div>
            <h2 className="label green mb-4">The solution</h2>
            <p className="text-ink-dim leading-relaxed">{caseStudy.solution}</p>
          </div>
        </motion.section>

        {/* Results */}
        <motion.section
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mb-16"
        >
          <h2 className="label green mb-4">Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {caseStudy.stats.map((stat, index) => (
              <div key={index} className="border border-line700 p-6">
                <div className="text-4xl font-bold tracking-heading mb-2 text-acid">
                  {stat.percentage}
                </div>
                <div className="text-ink-dim text-sm leading-relaxed">{stat.text}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Back to Case Studies Button */}
        <Link
          href="/case-studies"
          className="btn-ghost"
        >
          <span className="arr">←</span> Back to case studies
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyDetail;