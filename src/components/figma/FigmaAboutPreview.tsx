"use client";

import Image from "next/image";
import { MagneticButton } from "./MagneticButton";
import { Reveal, RevealLines } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function FigmaAboutPreview() {
  return (
    <section className="relative border-y border-[var(--border-c)] py-24 md:py-40" style={{ background: "var(--surface)" }}>
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <SectionLabel num="08">About</SectionLabel>
        <div className="mt-12 grid grid-cols-12 gap-6">
          <Reveal className="col-span-12 md:col-span-4">
            <div className="relative aspect-[3/4] w-full overflow-hidden border border-[var(--border-c)] bg-[var(--elevated)]">
              <Image
                src="/zaki-portrait.webp"
                alt="Zaki ul Hassan"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover object-top"
              />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text)]">
                <span>Karachi · PK</span>
                <span style={{ color: "var(--signal)" }}>● ON</span>
              </div>
            </div>
          </Reveal>

          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <h2
              aria-label="I'm Zaki ul Hassan, a product and UX/UI designer with 5+ years of experience."
              className="text-[clamp(32px,4.5vw,68px)] text-[var(--text)]"
            >
              <span aria-hidden="true">
                <RevealLines text={"I'm Zaki ul Hassan,\na product and UX/UI designer"} />
                <span className="block font-serif italic text-[var(--muted)]">
                  <RevealLines text={"with 5+ years of experience."} />
                </span>
              </span>
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl text-[16px] leading-relaxed text-[var(--muted)] md:text-[18px]">
                I work with agencies, startups, and product teams on websites, dashboards, mobile
                apps, SaaS products, and digital interfaces.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-y-5 border-t border-[var(--border-c)] pt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--text)] md:max-w-md">
                <span className="text-[var(--muted)]">Experience</span>
                <span>5+ years</span>
                <span className="text-[var(--muted)]">Based in</span>
                <span>Karachi, PK</span>
                <span className="text-[var(--muted)]">Working with</span>
                <span>Global teams</span>
                <span className="text-[var(--muted)]">Status</span>
                <span style={{ color: "var(--signal)" }}>● Available</span>
              </div>
              <div className="mt-10">
                <MagneticButton to="/about-me" variant="ghost">
                  More About Me
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
