"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, type PointerEvent } from "react";
import Image from "next/image";
import Link from "next/link";

const EASE = [0.6, 0.01, 0.05, 1] as const;

/** Radius of the arc the cards sit on (distance from the pivot below the hero). */
const RADIUS = "clamp(320px, 62vh, 760px)";
/** Angular spread of the fan, in degrees, split evenly across all cards. */
const SPREAD = 116;
/** How much of the radial tilt each card keeps (0 = upright, 1 = fully radial). */
const TILT_DAMP = 0.62;

type Card = { src: string; kind: "screen" | "phone" };

/** Device screenshots fanned across the background arc. */
const CARDS: Card[] = [
  { src: "/case-studies/rivo-hero.png", kind: "phone" },
  { src: "/cleanly-home.png", kind: "screen" },
  { src: "/figma/proj-1.jpg", kind: "screen" },
  { src: "/rivo-app.png", kind: "phone" },
  { src: "/furnium-website.png", kind: "screen" },
  { src: "/portfolio-website.png", kind: "screen" },
  { src: "/case-studies/cleanly-hero.png", kind: "screen" },
  { src: "/figma/proj-2.jpg", kind: "phone" },
  { src: "/furnium-header.png", kind: "screen" },
  { src: "/figma/proj-3.jpg", kind: "screen" },
  { src: "/case-studies/furnium-hero.png", kind: "screen" },
];

export function FigmaHeroV2() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const sliderY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const sliderOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const personY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Pointer parallax — subtle drift of the whole arc.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const springX = useSpring(px, { stiffness: 60, damping: 18 });
  const springY = useSpring(py, { stiffness: 60, damping: 18 });
  const parallaxX = useTransform(springX, [-0.5, 0.5], [-26, 26]);
  const parallaxRotate = useTransform(springX, [-0.5, 0.5], [-2.4, 2.4]);
  const parallaxY = useTransform(springY, [-0.5, 0.5], [-14, 14]);

  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onPointerLeave = () => {
    px.set(0);
    py.set(0);
  };

  const half = (CARDS.length - 1) / 2;
  const step = SPREAD / (CARDS.length - 1);

  return (
    <section
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="relative h-[100svh] overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle, var(--text) 0.5px, transparent 0.5px)",
          backgroundSize: "34px 34px",
          maskImage: "radial-gradient(ellipse at 50% 40%, black 20%, transparent 75%)",
        }}
      />

      {/* ---- Background arc slider ---- */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ y: sliderY, opacity: sliderOpacity }}
      >
        {/* pivot lives below the hero so only the top of the arc is visible */}
        <motion.div
          className="absolute left-1/2 top-[88%] h-0 w-0"
          animate={reduce ? undefined : { rotate: [-4.5, 4.5, -4.5] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute h-0 w-0"
            style={{ x: parallaxX, y: parallaxY, rotate: parallaxRotate }}
          >
            {CARDS.map((card, i) => {
              const angle = (i - half) * step;
              const norm = Math.abs(angle) / (SPREAD / 2); // 0 center → 1 edge
              const depth = 1 - norm; // 1 center → 0 edge
              const opacity = 0.32 + depth * 0.68;
              const scale = 0.82 + depth * 0.18;
              const brightness = 0.55 + depth * 0.45;
              const width =
                card.kind === "phone"
                  ? "clamp(78px, 8.5vw, 150px)"
                  : "clamp(150px, 17vw, 300px)";
              const aspect = card.kind === "phone" ? "9 / 19" : "16 / 10";

              return (
                <div
                  key={card.src}
                  className="absolute left-0 top-0"
                  style={{
                    transform: `rotate(${angle}deg) translateY(calc(-1 * ${RADIUS})) rotate(${
                      -angle * TILT_DAMP
                    }deg)`,
                  }}
                >
                  <motion.div
                    className="-translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border shadow-2xl"
                    style={{
                      width,
                      aspectRatio: aspect,
                      opacity,
                      scale,
                      filter: `brightness(${brightness})`,
                      borderColor: "rgba(241,238,230,0.10)",
                      background: "var(--surface)",
                      boxShadow: "0 30px 60px -20px rgba(0,0,0,0.7)",
                    }}
                    animate={reduce ? undefined : { y: [0, i % 2 ? -8 : 8, 0] }}
                    transition={{
                      duration: 7 + (i % 4),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                  >
                    <Image
                      src={card.src}
                      alt=""
                      fill
                      sizes="300px"
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Depth vignette — darkens edges + bottom so the arc melts into the bg */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 22%, transparent 40%, rgba(13,13,11,0.55) 72%, var(--bg) 100%), linear-gradient(to bottom, transparent 45%, rgba(13,13,11,0.85) 88%, var(--bg) 100%)",
        }}
      />

      {/* Ambient signal glow behind the figure */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[42%] z-20 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, rgba(198,254,30,0.10) 0%, rgba(198,254,30,0) 62%)",
        }}
        animate={reduce ? undefined : { scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ---- Person ---- */}
      <motion.div
        style={{ y: personY }}
        className="absolute bottom-0 left-1/2 z-30 h-[68vh] -translate-x-1/2 sm:h-[78vh] lg:h-[90vh]"
      >
        <div className="relative h-full w-[calc(68vh*0.75)] sm:w-[calc(78vh*0.75)] lg:w-[calc(90vh*0.75)]">
          <motion.div
            initial={{ scale: 1.12, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: EASE }}
            className="relative h-full w-full"
            style={{
              maskImage:
                "radial-gradient(115% 92% at 50% 34%, black 52%, transparent 80%), linear-gradient(to bottom, black 62%, transparent 99%)",
              WebkitMaskImage:
                "radial-gradient(115% 92% at 50% 34%, black 52%, transparent 80%), linear-gradient(to bottom, black 62%, transparent 99%)",
              WebkitMaskComposite: "source-in",
              maskComposite: "intersect",
            }}
          >
            <Image
              src="/zaki-portrait.webp"
              alt="Zaki ul Hassan"
              fill
              priority
              sizes="(min-width: 1024px) 70vh, 78vh"
              className="object-cover object-top contrast-[1.05]"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* ---- Top hero meta (sits under the fixed site nav) ---- */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute left-6 right-6 top-24 z-40 hidden justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--muted)] md:flex md:px-10 lg:top-28"
      >
        <div>
          <p>
            <span style={{ color: "var(--signal)" }}>●</span> Available for projects
          </p>
          <p className="mt-1 text-[var(--text)]">2 slots · Q3 2026</p>
        </div>
        <div className="text-right">
          <p>Based in</p>
          <p className="mt-1 text-[var(--text)]">Lahore, PK</p>
        </div>
      </motion.div>

      {/* ---- Bottom content: headline (left) + quote (right) ---- */}
      <motion.div
        style={{ y: textY }}
        className="absolute inset-x-0 bottom-0 z-40 mx-auto flex max-w-[1440px] flex-col gap-8 px-6 pb-10 md:flex-row md:items-end md:justify-between md:px-10 md:pb-14"
      >
        {/* Headline block */}
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
            className="mb-4 font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--muted)]"
          >
            <span style={{ color: "var(--signal)" }}>—</span> Hi, I&apos;m Zaki
          </motion.p>

          <h1
            aria-label="Product & UX Designer"
            className="font-serif text-[clamp(44px,8vw,104px)] font-normal leading-[0.92] tracking-[-0.02em] text-[var(--text)]"
          >
            {["Product &", "UX Designer"].map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.05, delay: 0.35 + i * 0.12, ease: EASE }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
            className="mt-7"
          >
            <StartProjectButton />
          </motion.div>
        </div>

        {/* Quote + signature */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1, ease: EASE }}
          className="max-w-sm md:text-right"
        >
          <p className="text-[15px] leading-[1.6] text-[var(--muted)] md:text-[16px]">
            &ldquo;I help founders who care about their users{" "}
            <span className="font-serif italic text-[var(--text)]">
              design thoughtful and impactful
            </span>{" "}
            products — not just another slop.&rdquo;
          </p>
          <p className="mt-4 font-gloria text-[26px] leading-none text-[var(--text)] md:ml-auto">
            Zaki
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

function StartProjectButton() {
  return (
    <Link
      href="/book-a-call"
      data-cursor="hover"
      className="group inline-flex items-center gap-3 rounded-full bg-[var(--text)] py-2 pl-2 pr-6 text-[14px] font-medium text-[var(--bg)] transition-colors duration-300 hover:bg-[var(--signal)]"
    >
      <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--bg)] text-[var(--text)] transition-transform duration-300 group-hover:rotate-45">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
          <path
            d="M3 11L11 3M11 3H4.5M11 3V9.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      Start a project
    </Link>
  );
}
