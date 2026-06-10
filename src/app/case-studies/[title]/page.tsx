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
          <h1 className="text-2xl font-bricolage font-bold mb-4">Case study not found</h1>
          <Link href="/case-studies" className="text-acid hover:text-greenSec">
            ← Back to Case Studies
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
          <Link href="/case-studies" className="text-sm text-ink-dim hover:text-acid flex items-center gap-2">
            ← Back to Case Studies
          </Link>
        </div>

        {/* Title Section */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mb-8"
        >
          <div className="text-muted mb-2 capitalize">{caseStudy.title1}</div>
          <h1 className="text-4xl font-medium mb-4 bg-gradient-to-r from-greenPri to-greenSec bg-clip-text text-transparent">{caseStudy.title}</h1>
          <div className="flex flex-wrap gap-2">
            {caseStudy.tag.map((tag, index) => (
              <span key={index} className="bg-foreground px-3 py-1 rounded-md text-white text-sm">
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
          <div className="rounded-xl overflow-hidden">
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
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          <div>
            <h3 className="font-bricolage font-bold mb-4 bg-gradient-to-r from-greenPri to-greenSec bg-clip-text text-transparent">MY ROLE</h3>
            <ul className="space-y-2">
              {caseStudy.role?.map((position, index) => (
                <li key={index} className="text-secondary font-jakarta">{position}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bricolage font-bold mb-4 bg-gradient-to-r from-greenPri to-greenSec bg-clip-text text-transparent">DELIVERABLES</h3>
            <ul className="space-y-2">
              {caseStudy.deliverables?.map((deliverable, index) => (
                <li key={index} className="text-secondary font-jakarta">{deliverable}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bricolage font-bold mb-4 bg-gradient-to-r from-greenPri to-greenSec bg-clip-text text-transparent">TEAM</h3>
            <ul className="space-y-2">
              {caseStudy.team?.map((member, index) => (
                <li key={index} className="text-secondary font-jakarta">{member}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bricolage font-bold mb-4 bg-gradient-to-r from-greenPri to-greenSec bg-clip-text text-transparent">YEAR</h3>
            <p className="text-secondary font-jakarta">{caseStudy.year}</p>
          </div>
        </motion.div>

        {/* Project Description */}
        <motion.section 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mb-16"
        >
          <h2 className="text-2xl font-bricolage font-bold mb-6 bg-gradient-to-r from-greenPri to-greenSec bg-clip-text text-transparent">PROJECT OVERVIEW</h2>
          <p className="text-secondary font-jakarta mb-6">{caseStudy.description}</p>
          <p className="text-secondary font-jakarta mb-6">{caseStudy.detailedDescription}</p>
        </motion.section>

        {/* Challenge & Solution */}
        <motion.section 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div>
            <h2 className="text-2xl font-bricolage font-bold mb-6 bg-gradient-to-r from-greenPri to-greenSec bg-clip-text text-transparent">THE CHALLENGE</h2>
            <p className="text-secondary font-jakarta">{caseStudy.challenge}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bricolage font-bold mb-6 bg-gradient-to-r from-greenPri to-greenSec bg-clip-text text-transparent">THE SOLUTION</h2>
            <p className="text-secondary font-jakarta">{caseStudy.solution}</p>
          </div>
        </motion.section>

        {/* Results */}
        <motion.section 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mb-16"
        >
          <h2 className="text-2xl font-bricolage bg-gradient-to-r from-greenPri to-greenSec bg-clip-text text-transparent font-bold mb-6">RESULTS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {caseStudy.stats.map((stat, index) => (
              <div key={index} className="bg-foreground p-6 rounded-xl">
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-greenPri to-greenSec bg-clip-text text-transparent">
                  {stat.percentage}
                </div>
                <div className="text-secondary font-jakarta">{stat.text}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Back to Case Studies Button */}
        <Link
          href="/case-studies"
          className="inline-block text-sm text-ink-dim hover:text-acid font-jakarta"
        >
          ← Back to Case Studies
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyDetail;