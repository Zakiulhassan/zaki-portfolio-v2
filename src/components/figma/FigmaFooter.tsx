"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";
import { Reveal, RevealLines } from "./Reveal";

const sitemap: [string, string][] = [
  ["Home", "/"],
  ["Work", "/case-studies"],
  ["Services", "/services"],
  ["About", "/about-me"],
  ["Contact", "/book-a-call"],
];

const elsewhere = ["LinkedIn", "Dribbble", "Read.cv", "Twitter / X"];

export function FigmaFooter() {
  return (
    <footer
      id="contact"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden border-t border-[var(--border-c)]"
      style={{ background: "var(--bg)" }}
    >
      {/* Ambient signal glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[70vw] w-[70vw] -translate-x-1/2 rounded-full"
        style={{
          background: "radial-gradient(circle at center, rgba(198,254,30,0.07) 0%, rgba(198,254,30,0) 65%)",
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto w-full max-w-[1440px] flex-1 px-6 py-16 md:px-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">
              <span style={{ color: "var(--signal)" }}>09</span>&nbsp;&nbsp;/ Get in touch
            </p>
            <h2 aria-label="Have a project in mind?" className="h-section mt-6 text-[var(--text)]">
              <span aria-hidden="true">
                <RevealLines text={"Have a project"} />
                <span className="block font-serif italic text-[var(--muted)]">
                  <RevealLines text={"in mind?"} />
                </span>
              </span>
            </h2>
            <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center gap-4">
              <MagneticButton to="/book-a-call">Book a Call</MagneticButton>
              <a
                href="mailto:hello@zakiulhassan.design"
                className="link-underline text-[15px] text-[var(--text)] md:text-[16px]"
              >
                hello@zakiulhassan.design
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="md:col-span-2 md:col-start-9">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">/ Sitemap</p>
            <ul className="mt-6 space-y-2 text-[15px]">
              {sitemap.map(([l, t]) => (
                <li key={t}>
                  <Link href={t} className="link-underline text-[var(--muted)] hover:text-[var(--text)]">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="md:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">/ Elsewhere</p>
            <ul className="mt-6 space-y-2 text-[15px]">
              {elsewhere.map((s) => (
                <li key={s}>
                  <a href="#" className="link-underline text-[var(--muted)] hover:text-[var(--text)]">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      <div className="relative border-t border-[var(--border-c)]">
        <div
          aria-hidden
          className="select-none overflow-hidden whitespace-nowrap px-6 text-center text-[clamp(56px,14vw,220px)] leading-[1] tracking-tighter md:px-16"
          style={{ color: "transparent", WebkitTextStroke: "1px var(--border-c)" }}
        >
          ZAKI<span className="font-serif italic">·</span>UL<span className="font-serif italic">·</span>HASSAN
        </div>
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-6 pb-8 font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--muted)] md:flex-row md:items-center md:justify-between md:px-16">
          <p>© {new Date().getFullYear()} Zaki ul Hassan — All rights reserved</p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5" style={{ background: "var(--signal)" }} />
            Designed &amp; built with care · Karachi, PK
          </p>
        </div>
      </div>
    </footer>
  );
}
