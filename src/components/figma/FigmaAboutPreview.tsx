"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";
import { Reveal, RevealLines, MaskReveal } from "./Reveal";

const stats = [
  ["Experience", "5+ years"],
  ["Based in", "Lahore, PK"],
  ["Working with", "Global teams"],
  ["Status", "Available"],
];

export function FigmaAboutPreview() {
  return (
    <section
      className="relative flex min-h-[100svh] items-center overflow-hidden border-y border-[var(--border-c)] py-24 md:py-0"
      style={{ background: "var(--surface)" }}
    >
      {/* Ambient signal glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-1/4 top-1/2 h-[60vw] w-[60vw] -translate-y-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle at center, rgba(198,254,30,0.08) 0%, rgba(198,254,30,0) 65%)",
        }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Vertical edge label */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-4 top-1/2 hidden -translate-y-1/2 -rotate-90 font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--muted)] md:left-8 md:block"
        style={{ writingMode: "horizontal-tb" }}
      >
        About — Zaki ul Hassan
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 md:px-16">
        <div className="grid grid-cols-12 items-center gap-8 md:gap-12">
          {/* Portrait */}
          <Reveal className="col-span-12 md:col-span-4">
            <MaskReveal className="aspect-[3/4] w-full border border-[var(--border-c)]">
              <Image
                src="/zaki-portrait.webp"
                alt="Zaki ul Hassan"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover object-top grayscale-[15%]"
              />
            </MaskReveal>
            <div className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">
              <span>Lahore · PK</span>
              <span style={{ color: "var(--signal)" }}>● Available</span>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="col-span-12 md:col-span-8">
            <h2
              aria-label="A calmer way to design SaaS, AI, and digital products."
              className="h-section text-[var(--text)]"
            >
              <span aria-hidden="true">
                <RevealLines text={"A calmer way to design"} />
                <span className="block font-serif italic text-[var(--muted)]">
                  <RevealLines text={"SaaS, AI & digital products."} />
                </span>
              </span>
            </h2>

            <Reveal delay={0.2} className="mt-8 max-w-xl">
              <p className="text-[16px] leading-relaxed text-[var(--muted)] md:text-[18px]">
                I&apos;m Zaki ul Hassan — a product and UX/UI designer working with agencies,
                startups, and product teams on websites, dashboards, mobile apps, and the
                systems that hold them together.
              </p>
            </Reveal>

            <Reveal delay={0.3} className="mt-10 grid grid-cols-2 gap-y-5 border-t border-[var(--border-c)] pt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--text)] sm:grid-cols-4 sm:gap-x-6">
              {stats.map(([label, value]) => (
                <div key={label}>
                  <div className="text-[var(--muted)]">{label}</div>
                  <div className="mt-2" style={label === "Status" ? { color: "var(--signal)" } : undefined}>
                    {label === "Status" ? "● Available" : value}
                  </div>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.4} className="mt-10">
              <MagneticButton to="/about-me" variant="ghost">
                More About Me
              </MagneticButton>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
