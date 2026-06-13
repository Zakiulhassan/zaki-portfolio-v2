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
  ratio = "aspect-[4/5]",
  size = "lg",
}: {
  project: (typeof figmaProjects)[number];
  index: number;
  className?: string;
  ratio?: string;
  size?: "lg" | "md" | "wide";
}) {
  const [hover, setHover] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <Reveal className={className} delay={(index % 4) * 0.08} y={32}>
      <Link
        href={`/case-studies/${project.slug}`}
        data-cursor="hover"
        onMouseMove={(e) => {
          const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
          setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="group block"
      >
        <div
          className={`relative ${ratio} w-full overflow-hidden border border-[var(--border-c)]`}
          style={{ background: "var(--surface)" }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{ scale: hover ? 1.05 : 1 }}
            transition={{ duration: 1.2, ease: EASE }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
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

          {/* View disc */}
          <motion.div
            className="pointer-events-none absolute z-20 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-center font-mono text-[10px] uppercase leading-tight tracking-[0.22em]"
            style={{ left: pos.x, top: pos.y, background: "var(--signal)", color: "var(--bg)" }}
            animate={{ scale: hover ? 1 : 0, opacity: hover ? 1 : 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            View
            <br />
            Case
          </motion.div>

          <motion.span
            className="absolute bottom-0 left-0 h-px"
            style={{ background: "var(--signal)" }}
            animate={{ width: hover ? "100%" : "0%" }}
            transition={{ duration: 0.7, ease: EASE }}
          />
        </div>

        {/* Caption — below the image, never over it */}
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h3
              className={
                size === "lg"
                  ? "text-[clamp(28px,3.4vw,56px)] tracking-tight text-[var(--text)]"
                  : size === "wide"
                  ? "text-[clamp(26px,3vw,48px)] tracking-tight text-[var(--text)]"
                  : "text-[clamp(22px,2.4vw,36px)] tracking-tight text-[var(--text)]"
              }
            >
              {project.title}
            </h3>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">
              {project.cat} · {project.role}
            </p>
          </div>
          <ArrowUpRight
            size={20}
            className="mt-2 shrink-0 text-[var(--muted)] transition-colors duration-300 group-hover:text-[var(--signal)]"
          />
        </div>
      </Link>
    </Reveal>
  );
}

function CTATile({ children }: { children: ReactNode }) {
  return (
    <Link
      href="/case-studies"
      data-cursor="hover"
      className="group relative flex h-full flex-col justify-between border border-[var(--border-c)] p-8 md:p-10"
      style={{ background: "var(--surface)" }}
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">
        / All Work
      </span>
      <div>
        <h3 className="text-[clamp(28px,3vw,48px)] tracking-tight text-[var(--text)]">
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

        {/* Bento grid */}
        <div className="grid auto-rows-[minmax(0,1fr)] grid-cols-12 gap-3 md:gap-5">
          <Tile
            project={figmaProjects[0]}
            index={0}
            size="lg"
            ratio="aspect-[4/5] md:aspect-[5/6]"
            className="col-span-12 md:col-span-7 md:row-span-2"
          />
          <Tile
            project={figmaProjects[1]}
            index={1}
            size="md"
            ratio="aspect-[4/5] md:aspect-[5/4]"
            className="col-span-12 md:col-span-5"
          />
          <Tile
            project={figmaProjects[2]}
            index={2}
            size="md"
            ratio="aspect-[4/5] md:aspect-[5/4]"
            className="col-span-12 md:col-span-5"
          />
          <Tile
            project={figmaProjects[1]}
            index={3}
            size="wide"
            ratio="aspect-[16/9] md:aspect-[16/7]"
            className="col-span-12 md:col-span-8"
          />
          <div className="col-span-12 md:col-span-4">
            <CTATile>+ 12 more projects in the archive</CTATile>
          </div>
        </div>
      </div>
    </section>
  );
}
