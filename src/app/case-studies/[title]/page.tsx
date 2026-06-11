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
    description: "Cleanly is an on-demand cleaning service for homes and offices. Bookings are the entire business — if scheduling feels uncertain, customers call a competitor.",
    stats: [
      { percentage: "200%", text: "Faster customer onboarding after the booking flow redesign." },
      { percentage: "70%", text: "Of visits engaged with service customization options." }
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
    detailedDescription: `I led both design and development: the customer-facing booking flow, the admin dashboard, and the code that runs them. One person owning both sides meant the design never had to be "translated" — what I drew is what shipped.`,
    challenge: `Scheduling a cleaning sounds simple until you model it: recurring visits, variable home sizes, add-on services, provider availability. The existing flow exposed all of that complexity to the customer at once, and people abandoned it.`,
    solution: `I split booking into one decision per step, with real-time availability so customers never pick a slot that bounces. Admins got a dashboard organized around the question they actually ask — "what's happening today?" — with recurring bookings manageable in two clicks instead of a phone call.`
  },
  {
    id: 2,
    author: "View case study",
    authorImg: "/logo.png",
    title1: "furnium",
    title: "Furnium - A Furniture E-commerce Platform UI/UX Design",
    description: "Furnium sells minimalist furniture — a product people judge entirely by how it looks. The store had to get out of the photography's way and still close the sale.",
    stats: [
      { percentage: "150%", text: "Increase in user engagement after launch." },
      { percentage: "95%", text: "Of tested users rated navigation positively." }
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
    detailedDescription: `I led UX and research: interviews with furniture buyers, then an interface built around how they actually shop — by room, by look, by price ceiling — rather than by catalog taxonomy.`,
    challenge: `Premium furniture buyers browse like gallery visitors but buy like accountants. The design had to hold both modes: full-bleed imagery that sells the look, and specs, dimensions, and delivery costs one tap away when the decision gets serious.`,
    solution: `A design system where photography owns the layout and UI stays in the margins. Filtering works the way buyers think — room, style, budget — and every product page answers the three questions that kill furniture purchases: will it fit, what's it made of, when does it arrive.`
  },
  {
    id: 3,
    author: "View case study",
    authorImg: "/logo.png",
    title1: "rivo",
    title: "Rivo - An E-commerce Tech Store Platform UI/UX Design",
    description: "Rivo is an online electronics store. Tech shoppers compare obsessively before they buy — the interface had to make comparison the fastest path to checkout, not a detour away from it.",
    stats: [
      { percentage: "120%", text: "Increase in engagement from personalized recommendations." },
      { percentage: "80%", text: "Improvement in repeat purchases." }
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
    detailedDescription: `I handled UI design and UX research. Testing showed two distinct audiences in the same store: spec-readers who want every number, and gift-buyers who want to be told what's good. The interface serves both without making either feel lost.`,
    challenge: `A graphics card has forty specifications; a buyer cares about five — and which five depends on who's asking. Dumping spec tables on every screen drove casual buyers away, while hiding them made enthusiasts distrust the store.`,
    solution: `Progressive disclosure: every product leads with the handful of specs that drive the decision for its category, with the full sheet one tap deeper. Side-by-side comparison lives inside the purchase flow, and recommendations are framed by use case — "for 4K gaming" — not by SKU similarity.`
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
          <h1 className="text-2xl font-semibold tracking-heading mb-4">Case study not found</h1>
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
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-heading mb-4 text-ink">{caseStudy.title}</h1>
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
                <div className="text-4xl font-semibold tracking-heading mb-2 text-acid">
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