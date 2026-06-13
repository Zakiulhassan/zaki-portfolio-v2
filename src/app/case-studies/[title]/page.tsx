"use client";

import { useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealLines } from "@/components/figma/Reveal";
import { FigmaFinalCTA } from "@/components/figma/FigmaFinalCTA";
import { figmaProjects } from "@/components/figma/FigmaSelectedWork";

export default function CaseStudyDetail() {
  const params = useParams<{ title: string }>();
  const slug = params?.title;
  const project = figmaProjects.find((p) => p.slug === slug) ?? figmaProjects[0];
  const next = figmaProjects[(figmaProjects.indexOf(project) + 1) % figmaProjects.length];

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="relative" style={{ background: "var(--bg)", color: "var(--text)" }}>
      <section ref={heroRef} className="relative pt-36 md:pt-44">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Link
            href="/case-studies"
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)] link-underline"
          >
            ← Back to Work
          </Link>
          <div className="mt-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
            <span style={{ color: "var(--signal)" }}>●</span>
            <span>{project.cat}</span>
            <span>·</span>
            <span>{project.year}</span>
          </div>
          <h1 className="mt-8 text-[clamp(56px,12vw,200px)] leading-[0.9] tracking-tight">
            <RevealLines text={project.title} />
          </h1>
          <p className="mt-8 max-w-2xl text-[18px] leading-relaxed text-[var(--muted)] md:text-[22px]">
            {project.summary}
          </p>
        </div>

        <motion.div style={{ y: heroY }} className="mt-16 px-6 md:px-10">
          <div className="relative mx-auto aspect-[16/9] max-w-[1440px] overflow-hidden border border-[var(--border-c)]">
            <Image src={project.image} alt={project.title} fill sizes="100vw" className="object-cover" />
          </div>
        </motion.div>
      </section>

      {/* Snapshot */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-2 gap-8 border-y border-[var(--border-c)] py-10 md:grid-cols-6">
          {[
            ["Role", project.role],
            ["Timeline", "10 weeks"],
            ["Platform", "Web · Mobile"],
            ["Scope", "UX · UI · System"],
            ["Tools", "Figma · Notion"],
            ["Status", "Shipped"],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">{k}</p>
              <p className="mt-2 text-[15px]">{v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Context / Problem / Goal */}
      <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-10 md:pb-32">
        <div className="grid grid-cols-12 gap-6">
          {[
            [
              "01",
              "Context",
              "An existing product with growing usage, but unclear flows and inconsistent screens slowing down both new users and the internal team.",
            ],
            [
              "02",
              "Problem",
              "Key tasks took too many steps, the dashboard hierarchy was unclear, and the visual system had drifted across teams.",
            ],
            [
              "03",
              "Goal",
              "Reduce friction in the core flow, clarify the dashboard's job, and ship a small, durable design system.",
            ],
          ].map(([n, t, b]) => (
            <Reveal key={n} className="col-span-12 md:col-span-4">
              <div className="border-t border-[var(--border-c)] pt-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                  <span style={{ color: "var(--signal)" }}>{n}</span> &nbsp;/&nbsp; {t}
                </p>
                <p className="mt-6 text-[18px] leading-relaxed md:text-[20px]">{b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Key Decisions */}
      <section className="border-y border-[var(--border-c)] py-24 md:py-32" style={{ background: "var(--surface)" }}>
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <h2 className="text-[clamp(40px,6vw,96px)]">
            Key <span className="font-serif italic text-[var(--muted)]">decisions.</span>
          </h2>
          <ul className="mt-12 divide-y divide-[var(--border-c)] border-y border-[var(--border-c)]">
            {[
              [
                "Collapse the booking flow into a single focused screen",
                "Reduces cognitive load and removes a duplicated step.",
                "Conversion path felt 1 step shorter.",
              ],
              [
                "Replace the static sidebar with a contextual nav",
                "Dashboard hierarchy depends on what the user is doing.",
                "Cleaner main screen, fewer dead clicks.",
              ],
              [
                "Lock down a 12-token color and spacing system",
                "Drift across teams was the visible quality issue.",
                "Hand-off velocity went up, review notes went down.",
              ],
            ].map(([d, w, c], i) => (
              <li key={i} className="grid grid-cols-12 gap-6 py-8">
                <span className="col-span-12 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)] md:col-span-1">
                  0{i + 1}
                </span>
                <p className="col-span-12 text-[20px] tracking-tight md:col-span-5 md:text-[26px]">{d}</p>
                <p className="col-span-12 text-[14px] text-[var(--muted)] md:col-span-3">{w}</p>
                <p className="col-span-12 text-[14px] md:col-span-3">{c}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final design gallery */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
        <h2 className="text-[clamp(40px,6vw,96px)]">
          Final <span className="font-serif italic text-[var(--muted)]">design.</span>
        </h2>
        <div className="mt-16 grid grid-cols-12 gap-6">
          {figmaProjects.map((p, i) => (
            <Reveal
              key={p.slug + i}
              className={
                i % 3 === 0
                  ? "col-span-12 md:col-span-8"
                  : i % 3 === 1
                  ? "col-span-12 md:col-span-4 md:mt-24"
                  : "col-span-12 md:col-span-12"
              }
            >
              <div className="relative aspect-[16/10] overflow-hidden border border-[var(--border-c)]">
                <Image src={p.image} alt="" fill sizes="100vw" className="object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Outcome / Reflection */}
      <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-10 md:pb-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
              <span style={{ color: "var(--signal)" }}>04</span> &nbsp;/&nbsp; Outcome
            </p>
            <h3 className="mt-6 text-[clamp(28px,3.5vw,52px)] leading-tight">
              The final design created a clearer flow, more consistent screens, and cleaner handoff
              structure for development.
            </h3>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
              <span style={{ color: "var(--signal)" }}>05</span> &nbsp;/&nbsp; Reflection
            </p>
            <p className="mt-6 text-[16px] leading-relaxed text-[var(--muted)] md:text-[18px]">
              The hardest part wasn&apos;t the new screens — it was deciding what to remove. The work
              that landed strongest was structural, not decorative.
            </p>
          </div>
        </div>
      </section>

      {/* Next case */}
      <section className="border-t border-[var(--border-c)]">
        <Link
          href={`/case-studies/${next.slug}`}
          data-cursor="hover"
          className="group relative grid grid-cols-12 items-center gap-4 px-6 py-16 transition-colors hover:bg-[var(--surface)] md:px-10 md:py-24"
        >
          <span className="col-span-12 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)] md:col-span-2">
            Next Case Study →
          </span>
          <span className="col-span-12 text-[clamp(40px,8vw,128px)] tracking-tight md:col-span-9">
            {next.title}
          </span>
          <span className="col-span-12 flex md:col-span-1 md:justify-end">
            <span className="grid h-12 w-12 place-items-center rounded-full border border-[var(--border-c)] transition-colors group-hover:border-[var(--signal)] group-hover:text-[var(--signal)]">
              <ArrowUpRight size={18} />
            </span>
          </span>
        </Link>
      </section>

      <FigmaFinalCTA />
    </div>
  );
}
