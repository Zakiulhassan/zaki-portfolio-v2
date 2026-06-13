"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const EASE = [0.6, 0.01, 0.05, 1] as const;

const services = [
  {
    n: "01",
    title: "Product Design",
    body: "User flows, dashboards, SaaS products, AI tools, mobile apps, and web platforms.",
    image: "/figma/proj-1.jpg",
  },
  {
    n: "02",
    title: "UX/UI Design",
    body: "Wireframes, interface design, responsive screens, prototypes, components, and systems.",
    image: "/figma/proj-2.jpg",
  },
  {
    n: "03",
    title: "Website Design",
    body: "Website structure, landing pages, service pages, portfolio pages, responsive design, and handoff.",
    image: "/figma/proj-3.jpg",
  },
  {
    n: "04",
    title: "Design Systems",
    body: "Tokens, component libraries, documentation, and the patterns that hold a product together.",
    image: "/figma/proj-1.jpg",
  },
];

export function FigmaServices() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="relative scroll-mt-24">
      <div className="mx-auto max-w-[1440px] px-6 py-32 md:px-16 md:py-56">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">
              <span style={{ color: "var(--signal)" }}>05</span>
              <span className="h-px w-10 bg-[var(--border-c)]" />
              <span>Capabilities</span>
            </div>
            <h2 className="h-section mt-10 max-w-3xl text-[var(--text)]">
              Hire me <span className="font-serif italic text-[var(--muted)]">for.</span>
            </h2>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--muted)]">
            04 disciplines
          </span>
        </div>

        <div className="mt-20 grid grid-cols-12 gap-6 md:gap-10">
          {/* Left: sticky image */}
          <div className="col-span-12 md:col-span-5 md:sticky md:top-32 md:self-start">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-[var(--border-c)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.9, ease: EASE }}
                  className="absolute inset-0"
                >
                  <Image
                    src={services[active].image}
                    alt={services[active].title}
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,13,11,0.55)] via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--text)]">
                <span>
                  {services[active].n} / {services[active].title}
                </span>
                <span style={{ color: "var(--signal)" }}>● ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Right: numbered service wall */}
          <ul className="col-span-12 md:col-span-7">
            {services.map((s, i) => (
              <li
                key={s.title}
                onMouseEnter={() => setActive(i)}
                className="group relative grid cursor-default grid-cols-12 items-start gap-4 border-t border-[var(--border-c)] px-4 py-10 transition-colors duration-500 md:px-6 md:py-12"
                style={{ background: active === i ? "var(--elevated)" : "transparent" }}
              >
                <motion.span
                  className="absolute -left-3 top-12 h-1.5 w-1.5 rounded-full"
                  style={{ background: "var(--signal)" }}
                  animate={{ scale: active === i ? 1 : 0, opacity: active === i ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />

                <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--muted)] md:col-span-1">
                  {`{${s.n}}`}
                </span>
                <div className="col-span-10 md:col-span-11">
                  <motion.h3
                    animate={{ x: active === i ? 8 : 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="text-[clamp(28px,4vw,56px)] leading-[1] tracking-[-0.02em]"
                    style={{ color: active === i ? "var(--text)" : "var(--muted)" }}
                  >
                    {s.title}
                  </motion.h3>

                  <motion.div
                    initial={false}
                    animate={{
                      height: active === i ? "auto" : 0,
                      opacity: active === i ? 1 : 0,
                      marginTop: active === i ? 18 : 0,
                    }}
                    transition={{ duration: 0.6, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-md text-[15px] leading-[1.5] text-[var(--muted)] md:text-[16px]">
                      {s.body}
                    </p>
                  </motion.div>
                </div>
              </li>
            ))}
            <li className="border-t border-[var(--border-c)]" />
          </ul>
        </div>
      </div>
    </section>
  );
}
