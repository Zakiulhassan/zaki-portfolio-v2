"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const EASE = [0.6, 0.01, 0.05, 1] as const;

export const figmaProjects = [
  {
    slug: "cleanly",
    title: "Cleanly",
    tag: "Booking Platform",
    cat: "UX/UI · Web App",
    year: "2025",
    role: "Lead Product Designer",
    summary: "A clearer booking and admin experience for a service platform.",
    image: "/figma/proj-1.jpg",
  },
  {
    slug: "furnium",
    title: "Furnium",
    tag: "E-commerce",
    cat: "Product Design · UI System",
    year: "2024",
    role: "Senior Designer",
    summary: "Redesigned browsing, product pages, and checkout for a cleaner shopping experience.",
    image: "/figma/proj-2.jpg",
  },
  {
    slug: "rivo",
    title: "Rivo",
    tag: "Tech Retail",
    cat: "Mobile UX · Checkout",
    year: "2024",
    role: "UX/UI Designer",
    summary: "Improved product discovery, comparison, and checkout flow for a tech retail experience.",
    image: "/figma/proj-3.jpg",
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

export function FigmaSelectedWork() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-[1440px] px-6 pb-40 md:px-16 md:pb-56">
        <div className="flex flex-wrap items-end justify-between gap-8 pb-16">
          <div>
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">
              <span style={{ color: "var(--signal)" }}>03</span>
              <span className="h-px w-10 bg-[var(--border-c)]" />
              <span>Selected Work</span>
            </div>
            <h2 className="h-section mt-10 text-[var(--text)]">
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
          {figmaProjects.map((project, i) => (
            <Tile key={project.slug} project={project} index={i} />
          ))}
          <CTATile>+ 12 more projects in the archive</CTATile>
        </div>
      </div>
    </section>
  );
}
