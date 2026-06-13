"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FigmaPageHeader } from "@/components/figma/FigmaPageHeader";
import { Reveal } from "@/components/figma/Reveal";
import { FigmaFinalCTA } from "@/components/figma/FigmaFinalCTA";
import { figmaProjects } from "@/components/figma/FigmaSelectedWork";

const filters = [
  "All",
  "Product Design",
  "UX/UI",
  "Website",
  "Dashboard",
  "Mobile App",
  "E-commerce",
  "AI Product",
];

export default function CaseStudiesPage() {
  const [active, setActive] = useState("All");
  const projects = figmaProjects;

  return (
    <div className="relative" style={{ background: "var(--bg)", color: "var(--text)" }}>
      <FigmaPageHeader
        title="Product, UX/UI, and"
        italic="website design work."
        subtitle="Selected projects showing user flows, interface design, visual systems, responsive layouts, and development-ready handoff."
      />

      <section className="mx-auto max-w-[1440px] px-6 pt-16 md:px-10">
        <div className="flex flex-wrap gap-2 border-y border-[var(--border-c)] py-5">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] transition-colors"
              style={{
                borderColor: active === f ? "var(--signal)" : "var(--border-c)",
                color: active === f ? "var(--signal)" : "var(--muted)",
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
        <ul className="divide-y divide-[var(--border-c)] border-y border-[var(--border-c)]">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <ProjectRow p={p} i={i} />
            </Reveal>
          ))}
        </ul>
      </section>

      <FigmaFinalCTA />
    </div>
  );
}

function ProjectRow({ p, i }: { p: (typeof figmaProjects)[number]; i: number }) {
  const [hover, setHover] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <li
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative"
    >
      <Link
        href={`/case-studies/${p.slug}`}
        data-cursor="hover"
        className="grid grid-cols-12 items-center gap-4 py-8 transition-colors md:py-12"
      >
        <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)] md:col-span-1">
          0{i + 1}
        </span>
        <span className="col-span-10 text-[34px] tracking-tight md:col-span-5 md:text-[64px]">
          {p.title}
        </span>
        <span className="col-span-6 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)] md:col-span-3">
          {p.cat}
        </span>
        <span className="col-span-4 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)] md:col-span-2">
          {p.year} · {p.role}
        </span>
        <span className="col-span-2 flex justify-end md:col-span-1">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border-c)] transition-colors hover:border-[var(--signal)] hover:text-[var(--signal)]">
            <ArrowUpRight size={16} />
          </span>
        </span>
      </Link>

      <motion.div
        className="pointer-events-none fixed z-30 hidden aspect-[4/5] w-[280px] overflow-hidden border border-[var(--border-c)] md:block"
        style={{ left: pos.x + 24, top: pos.y - 180 }}
        animate={{ opacity: hover ? 1 : 0, scale: hover ? 1 : 0.9 }}
        transition={{ duration: 0.4, ease: [0.6, 0.01, 0.05, 1] }}
      >
        <Image src={p.image} alt={p.title} fill sizes="280px" className="object-cover" />
      </motion.div>

      <motion.span
        className="absolute bottom-0 left-0 h-px"
        style={{ background: "var(--signal)" }}
        animate={{ width: hover ? "100%" : "0%" }}
        transition={{ duration: 0.7, ease: [0.6, 0.01, 0.05, 1] }}
      />
    </li>
  );
}
