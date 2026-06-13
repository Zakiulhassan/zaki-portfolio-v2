"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Image from "next/image";

const EASE = [0.6, 0.01, 0.05, 1] as const;

const steps = [
  {
    n: "01",
    t: "Understand",
    note: "Read the product, the users, and the goal before drawing anything.",
    meta: "Discovery / Research",
    img: "/figma/proj-1.jpg",
    offset: "md:translate-x-0",
    rotate: "-1.5deg",
  },
  {
    n: "02",
    t: "Structure",
    note: "Flow, content, and screens — the architecture that keeps the rest honest.",
    meta: "Information Architecture",
    img: "/figma/proj-2.jpg",
    offset: "md:translate-x-[18%]",
    rotate: "1deg",
  },
  {
    n: "03",
    t: "Design",
    note: "Clean, usable interfaces. Fewer parts, doing more work.",
    meta: "Interface / Visual",
    img: "/figma/proj-3.jpg",
    offset: "md:translate-x-[6%]",
    rotate: "-0.8deg",
  },
  {
    n: "04",
    t: "Refine",
    note: "States, edge cases, responsive behavior, motion intent.",
    meta: "States / Responsive",
    img: "/zaki-portrait.webp",
    offset: "md:translate-x-[22%]",
    rotate: "1.2deg",
  },
  {
    n: "05",
    t: "Handoff",
    note: "Files engineers can build from without translating the intent.",
    meta: "Handoff / Engineering",
    img: "/figma/proj-1.jpg",
    offset: "md:translate-x-[10%]",
    rotate: "-0.6deg",
  },
];

export function FigmaProcess() {
  const railRef = useRef<HTMLUListElement>(null);
  const { scrollYProgress } = useScroll({ target: railRef, offset: ["start center", "end center"] });
  const barHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(steps.length - 1, Math.max(0, Math.floor(v * steps.length)));
    setActive(idx);
  });

  return (
    <section className="relative overflow-hidden border-y border-[var(--border-c)]" style={{ background: "var(--surface)" }}>
      <div className="mx-auto max-w-[1440px] px-6 py-32 md:px-16 md:py-56">
        <div className="grid grid-cols-12 gap-6">
          {/* Sticky left label */}
          <div className="col-span-12 md:col-span-4 md:sticky md:top-32 md:self-start">
            <h2 className="h-section text-[var(--text)]">
              The work <span className="font-serif italic text-[var(--muted)]">between.</span>
            </h2>
            <p className="mt-10 max-w-xs text-[15px] leading-[1.5] text-[var(--muted)] md:text-[16px]">
              The useful part of design is often hidden — structure, decisions, systems, and handoff.
            </p>

            {/* Scroll-driven progress readout */}
            <div className="mt-16 hidden md:block">
              <div className="flex items-baseline gap-4">
                <motion.span
                  key={active}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="text-[clamp(28px,3vw,48px)] tracking-tight text-[var(--text)]"
                >
                  {steps[active].t}
                  <span className="font-serif italic text-[var(--muted)]">.</span>
                </motion.span>
              </div>
              <div className="relative mt-6 h-32 w-px bg-[var(--border-c)]">
                <motion.div
                  className="absolute left-0 top-0 w-px"
                  style={{ background: "var(--signal)", height: barHeight }}
                />
              </div>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">
                <span style={{ color: "var(--signal)" }}>{steps[active].n}</span> / {String(steps.length).padStart(2, "0")} —{" "}
                {steps[active].meta}
              </p>
            </div>
          </div>

          {/* Overlapping archive panels */}
          <div className="col-span-12 md:col-span-8 md:col-start-5">
            <ul ref={railRef} className="space-y-24 md:space-y-32">
              {steps.map((s, i) => (
                <motion.li
                  key={s.n}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15% 0px" }}
                  transition={{ duration: 1, ease: EASE }}
                  className={`relative ${i % 2 === 0 ? "" : "md:ml-auto"} md:max-w-[560px]`}
                >
                  <div className={`relative ${s.offset}`} style={{ transform: `rotate(${s.rotate})` }}>
                    <div className="relative aspect-[4/5] w-full overflow-hidden border border-[var(--border-c)]">
                      <motion.div
                        initial={{ scale: 1.15 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, margin: "-15% 0px" }}
                        transition={{ duration: 1.6, ease: EASE }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={s.img}
                          alt={s.t}
                          fill
                          sizes="(min-width: 768px) 45vw, 100vw"
                          className="object-cover grayscale-[15%]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,13,11,0.55)] via-transparent to-transparent" />
                      </motion.div>

                      {/* Mask reveal */}
                      <motion.div
                        className="absolute inset-0 origin-top"
                        style={{ background: "var(--surface)" }}
                        initial={{ scaleY: 1 }}
                        whileInView={{ scaleY: 0 }}
                        viewport={{ once: true, margin: "-15% 0px" }}
                        transition={{ duration: 1.2, ease: [0.7, 0, 0.2, 1] }}
                      />

                      <div className="absolute left-5 right-5 top-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--text)]">
                        <span>
                          <span style={{ color: "var(--signal)" }}>{s.n}</span> · {s.meta}
                        </span>
                        <span>Frame {String(i + 1).padStart(2, "0")} / 05</span>
                      </div>
                    </div>

                    {/* Note panel */}
                    <div className={`mt-6 max-w-md ${i % 2 === 0 ? "" : "md:ml-auto md:text-right"}`}>
                      <h3 className="text-[clamp(28px,3vw,52px)] tracking-tight text-[var(--text)]">
                        {s.t}
                        <span className="font-serif italic text-[var(--muted)]">.</span>
                      </h3>
                      <p className="mt-3 text-[14px] leading-[1.5] text-[var(--muted)] md:text-[15px]">
                        {s.note}
                      </p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
