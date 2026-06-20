"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const EASE = [0.6, 0.01, 0.05, 1] as const;

type FigmaProject = {
  slug: string;
  title: string;
  tag: string;
  cat: string;
  year: string;
  role: string;
  summary: string;
  image: string;
  tools?: string;
  behanceUrl?: string;
  gallery?: string[];
  narrative?: [string, string, string][];
};

export const figmaProjects: FigmaProject[] = [
  {
    slug: "implement-ai",
    title: "Implement AI",
    tag: "AI CRM Platform",
    cat: "Product Design · UI/UX",
    year: "2026",
    role: "Lead Product Designer",
    summary:
      "A CRM and campaign management platform built around AI-driven business automation — sales, support, and messaging agents in one operational system.",
    tools: "Figma · Illustrator · Photoshop",
    behanceUrl: "https://www.behance.net/gallery/250375935/Implement-AI-CRM-and-campaign-management-platform",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/f50c12250375935.Y3JvcCwyNTA4LDE5NjIsMCww.png",
    gallery: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f4e500250375935.6a1e140491a00.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/134cba250375935.6a1e1404931a0.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/ca45f9250375935.6a1e140492976.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/1c4f48250375935.6a1e140492d74.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/d87e4f250375935.6a1e1de6556b1.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/98a266250375935.6a1e140491df2.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/697733250375935.6a1e1404921c5.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/045457250375935.6a1e14049257e.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/192411250375935.6a1e14049366d.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/461846250375935.6a1e140490fa2.png",
    ],
    narrative: [
      [
        "01",
        "Overview",
        "ImplementAI is a CRM and campaign management platform built around AI-driven business automation. It allows teams to manage communication across calls, email, SMS, WhatsApp, and other connected channels.",
      ],
      [
        "02",
        "Capabilities",
        "The product supports AI sales agents, support agents, messaging agents, knowledge base agents, call analysis, task automation, campaign workflows, document data sources, billing, integrations, and usage monitoring.",
      ],
      [
        "03",
        "Design Challenge",
        "The challenge was not only to make the interface look clean. The bigger challenge was to make a very feature-heavy AI product feel understandable, controllable, and operationally reliable.",
      ],
    ] as [string, string, string][],
  },
  {
    slug: "techanzy",
    title: "Techanzy",
    tag: "Software & AI Agency",
    cat: "Website · UI/UX",
    year: "2026",
    role: "Product Designer",
    summary:
      "A marketing website for a software development and AI automation studio, built to present services and case work with clarity.",
    behanceUrl:
      "https://www.behance.net/gallery/250044237/Techanzy-Website-Software-Development-AI-Automation",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/a549ee250044237.Y3JvcCwyNTA4LDE5NjIsMCww.png",
  },
  {
    slug: "arabsocials",
    title: "ArabSocials",
    tag: "Social Networking App",
    cat: "Mobile App · UX/UI",
    year: "2025",
    role: "UX/UI Designer",
    summary:
      "A networking and events app connecting communities through shared interests, meetups, and social discovery.",
    behanceUrl: "https://www.behance.net/gallery/220816509/ArabSocials-A-Networking-and-Events-Apps",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/653ff7220816509.Y3JvcCwyMzI2LDE4MjAsMjM2LDA.png",
  },
  {
    slug: "cleanly",
    title: "Cleanly",
    tag: "Booking Platform",
    cat: "UX/UI · Web App",
    year: "2025",
    role: "Lead Product Designer",
    summary: "A clearer booking and admin experience for a cleaning service platform.",
    behanceUrl: "https://www.behance.net/gallery/220672023/Cleanly-Cleaning-Service-Booking-Web-App",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/643cbd220672023.Y3JvcCwyMjIxLDE3MzcsMTg2LDQz.png",
  },
  {
    slug: "therapyquizgame",
    title: "TherapyQuizGame",
    tag: "Wellness Web App",
    cat: "UX/UI · Web App",
    year: "2025",
    role: "UX/UI Designer",
    summary: "An interactive quiz-style web app guiding users through a therapy-focused self-assessment.",
    behanceUrl: "https://www.behance.net/gallery/220667873/TherapyQuizGame-Web-App-UIUx-Design",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/0ab64e220667873.Y3JvcCwyMzI2LDE4MjAsMTk1LDA.png",
  },
  {
    slug: "furnium",
    title: "Furnium",
    tag: "E-commerce",
    cat: "Product Design · UI System",
    year: "2024",
    role: "Senior Designer",
    summary: "Redesigned browsing, product pages, and checkout for a cleaner furniture shopping experience.",
    behanceUrl: "https://www.behance.net/gallery/205907031/Furnium-eCommerce-Furniture-Website-Design",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/e53e29205907031.Y3JvcCwyMzI2LDE4MjAsNTcsMA.png",
  },
  {
    slug: "rivo",
    title: "Rivo Tech",
    tag: "Tech Retail",
    cat: "Mobile UX · Checkout",
    year: "2024",
    role: "UX/UI Designer",
    summary: "Improved product discovery, comparison, and checkout flow for a tech retail experience.",
    behanceUrl: "https://www.behance.net/gallery/205827347/Rivo-Tech-E-commerce-Mobile-Ux-App-Case-Study",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/a7cae4205827347.Y3JvcCwyMzI2LDE4MjAsMTQ5LDA.png",
  },
];

function Tile({
  project,
  index,
  className = "",
}: {
  project: (typeof figmaProjects)[number];
  index: number;
  className?: string;
}) {
  const [hover, setHover] = useState(false);
  return (
    <Reveal className={className} delay={(index % 4) * 0.08} y={32}>
      <Link
        href={`/case-studies/${project.slug}`}
        data-cursor="hover"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="group block overflow-hidden border border-[var(--border-c)] transition-colors duration-300 hover:border-[var(--signal)]"
        style={{ background: "var(--surface)" }}
      >
        {/* Image */}
        <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[16/11]">
          <motion.div
            className="absolute inset-0"
            animate={{ scale: hover ? 1.05 : 1 }}
            transition={{ duration: 1.2, ease: EASE }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>

          {/* Top metadata */}
          <div className="absolute left-5 right-5 top-5 flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--text)] [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
            <span>
              0{index + 1} / {project.tag}
            </span>
            <span>{project.year}</span>
          </div>
        </div>

        {/* Caption — distinct panel below the image, clearly part of the same card */}
        <div className="flex items-start justify-between gap-4 border-t border-[var(--border-c)] p-5 md:p-6">
          <div>
            <h3 className="text-[clamp(22px,2.6vw,40px)] tracking-tight text-[var(--text)]">
              {project.title}
            </h3>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">
              {project.cat} · {project.role}
            </p>
          </div>
          <span
            className="grid h-9 w-9 shrink-0 place-items-center border border-[var(--border-c)] transition-colors duration-300 group-hover:border-[var(--signal)] group-hover:text-[var(--signal)]"
            style={{ color: "var(--muted)" }}
          >
            <ArrowUpRight size={16} />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

function CTATile({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <Reveal className={className} delay={0.24} y={32}>
      <Link
        href="/case-studies"
        data-cursor="hover"
        className="group relative flex aspect-[4/5] flex-col justify-between border border-[var(--border-c)] p-6 transition-colors duration-300 hover:border-[var(--signal)] md:aspect-[16/11] md:p-8"
        style={{ background: "var(--surface)" }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">
          / All Work
        </span>
        <div>
          <h3 className="text-[clamp(22px,2.6vw,40px)] tracking-tight text-[var(--text)]">
            {children}
            <span className="font-serif italic text-[var(--muted)]">.</span>
          </h3>
          <span className="mt-6 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--text)] transition-colors group-hover:text-[var(--signal)]">
            View archive
            <ArrowUpRight size={14} />
          </span>
        </div>
        <span
          className="absolute right-6 top-6 h-1.5 w-1.5 rounded-full"
          style={{ background: "var(--signal)" }}
        />
      </Link>
    </Reveal>
  );
}

const featured = figmaProjects.slice(0, 3);

export function FigmaSelectedWork() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-[1440px] px-6 pb-40 md:px-16 md:pb-56">
        <div className="flex flex-wrap items-end justify-between gap-8 pb-16">
          <div>
            <h2 className="h-section text-[var(--text)]">
              Selected <span className="font-serif italic text-[var(--muted)]">work.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-[1.5] text-[var(--muted)] md:text-[15px]">
            A small set of recent projects across product, UX/UI, and website design — chosen for
            structure, usability, and visual quality.
          </p>
        </div>

        {/* Project cards — uniform grid, image and caption share one bordered card */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {featured.map((project, i) => (
            <Tile key={project.slug} project={project} index={i} />
          ))}
          <CTATile>+ {figmaProjects.length - featured.length} more projects in the archive</CTATile>
        </div>
      </div>
    </section>
  );
}
