import Image from "next/image";
import { FigmaPageHeader } from "@/components/figma/FigmaPageHeader";
import { Reveal } from "@/components/figma/Reveal";
import { FigmaFinalCTA } from "@/components/figma/FigmaFinalCTA";

const careValues = [
  "Clear structure",
  "Useful interfaces",
  "Strong hierarchy",
  "Consistent systems",
  "Readable layouts",
  "Practical handoff",
  "Better product presentation",
];

const experience = [
  ["2024 — Now", "Senior Product Designer", "Freelance · Agencies · Product teams"],
  ["2022 — 2024", "Product Designer", "SaaS · AI · Dashboards"],
  ["2020 — 2022", "UX/UI Designer", "Websites · Mobile apps · E-commerce"],
  ["2019", "Visual Designer", "Brand & marketing"],
];

const stats = [
  ["50+", "Projects shipped"],
  ["12", "SaaS / AI products"],
  ["5+", "Years of practice"],
  ["3", "Continents served"],
];

export default function AboutMePage() {
  return (
    <div className="relative" style={{ background: "var(--bg)", color: "var(--text)" }}>
      <FigmaPageHeader
        num="04"
        kicker="About"
        title="I design digital products"
        italic="that are clear, usable, and ready to build."
        subtitle="I'm Zaki ul Hassan, a product and UX/UI designer with 5+ years of experience across websites, dashboards, apps, and SaaS products."
      />

      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-12 gap-6">
          <Reveal className="col-span-12 md:col-span-5">
            <div
              className="relative aspect-[4/5] w-full overflow-hidden border border-[var(--border-c)]"
              style={{ background: "var(--elevated)" }}
            >
              <Image
                src="/zaki-portrait.webp"
                alt="Zaki ul Hassan"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>

          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <Reveal>
              <p className="text-[18px] leading-relaxed md:text-[22px]">
                I help agencies, startups, and product teams improve how their products look, work,
                and communicate.
              </p>
              <p className="mt-6 text-[16px] leading-relaxed text-[var(--muted)] md:text-[18px]">
                My work combines UX structure, interface design, visual quality, and frontend-aware
                thinking — so the design lands clean in production, not just in Figma.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-12 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                / What I care about
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-px overflow-hidden border border-[var(--border-c)] md:grid-cols-2">
                {careValues.map((t, i) => (
                  <li key={t} className="flex items-center gap-3 p-5 text-[15px]" style={{ background: "var(--bg)" }}>
                    <span className="font-mono text-[10px] text-[var(--muted)]">0{i + 1}</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Experience snapshot */}
      <section className="border-y border-[var(--border-c)] py-24 md:py-32" style={{ background: "var(--surface)" }}>
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
            <span style={{ color: "var(--signal)" }}>/</span> Experience snapshot
          </p>
          <ul className="mt-12 divide-y divide-[var(--border-c)] border-y border-[var(--border-c)]">
            {experience.map(([y, r, c]) => (
              <li key={y} className="grid grid-cols-12 gap-4 py-6">
                <span className="col-span-4 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)] md:col-span-2">
                  {y}
                </span>
                <span className="col-span-8 text-[20px] tracking-tight md:col-span-5 md:text-[24px]">{r}</span>
                <span className="col-span-12 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)] md:col-span-5">
                  {c}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map(([n, l]) => (
              <div key={l} className="border border-[var(--border-c)] p-6">
                <p className="text-[clamp(40px,6vw,80px)] tracking-tight">{n}</p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FigmaFinalCTA />
    </div>
  );
}
