"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";
import { RevealLines } from "./Reveal";

export function FigmaFinalCTA() {
  return (
    <section className="relative overflow-hidden py-32 md:py-56">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(198,254,30,0.10) 0%, rgba(198,254,30,0) 65%)",
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative mx-auto max-w-[1440px] px-6 text-center md:px-10">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
          / Final Note
        </span>
        <h2
          aria-label="Need help with a product, website, or interface?"
          className="mx-auto mt-8 max-w-5xl text-[clamp(44px,8vw,128px)] tracking-tight text-[var(--text)]"
        >
          <span aria-hidden="true">
            <RevealLines text={"Need help with a product,"} />
            <span className="block font-serif italic text-[var(--muted)]">
              <RevealLines text={"website, or interface?"} />
            </span>
          </span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-[16px] text-[var(--muted)] md:text-[18px]">
          Send the project details. I&apos;ll review what needs to improve and how I can help.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton to="/book-a-call">Book a Call</MagneticButton>
          <MagneticButton to="/case-studies" variant="ghost">
            View Work
          </MagneticButton>
        </div>
        <div className="mx-auto mt-20 h-px w-24" style={{ background: "var(--signal)" }} />
      </div>
    </section>
  );
}
