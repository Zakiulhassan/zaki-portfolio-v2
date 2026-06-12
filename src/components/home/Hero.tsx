"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { SplitReveal, FadeIn } from "../motion/SplitReveal";
import Container from "../widgets/Container";
import WebGLDesignArtifact from "../effects/WebGLDesignArtifact";

/**
 * Opening scene: a single centered portrait flanked by editorial type.
 * Serif greeting sits behind the figure, the name and discipline anchor
 * the lower corners in front of it — calm, spare, one visual anchor.
 */
const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 48]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-coal text-ink"
    >
      {/* Quiet background: faint radial light + 1px arc linework */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[38%] h-[110vmin] w-[110vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(244,244,239,0.06),transparent_72%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[40%] h-[88vmin] w-[88vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/[0.06]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[40%] h-[64vmin] w-[64vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/[0.05]"
      />

      {/* WebGL design artifact: cursor-reactive UI fragments orbiting the portrait */}
      <WebGLDesignArtifact targetRef={sectionRef} />

      {/* Serif greeting, split around the figure */}
      <div className="absolute inset-x-0 top-[15vh] z-[1] flex items-baseline justify-center gap-[18vw] lg:top-[17vh]">
        <SplitReveal
          as="span"
          mode="words"
          immediate
          delay={0.3}
          className="font-serif italic text-[13vw] leading-none sm:text-[10vw] lg:text-[8.5vw]"
        >
          Hey,
        </SplitReveal>
        <SplitReveal
          as="span"
          mode="words"
          immediate
          delay={0.45}
          className="font-serif italic text-[13vw] leading-none sm:text-[10vw] lg:text-[8.5vw]"
        >
          there
        </SplitReveal>
      </div>

      {/* Centered portrait, anchored to the bottom edge */}
      <div className="absolute bottom-0 left-1/2 z-[2] aspect-[934/1791] h-[56vh] -translate-x-1/2 sm:h-[64vh] lg:h-[76vh]">
        <FadeIn immediate delay={0.15} y={32} className="h-full w-full">
          <motion.div style={{ y: portraitY }} className="relative h-full w-full">
            <Image
              src="/zaki-portrait.webp"
              alt="Zaki ul Hassan, seated portrait"
              fill
              priority
              sizes="(min-width: 1024px) 40vh, 60vw"
              className="object-contain object-bottom"
            />
          </motion.div>
        </FadeIn>
      </div>

      {/* Ground the figure into the section edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-24 bg-gradient-to-b from-transparent to-coal"
      />

      <Container className="pointer-events-none relative z-[3] min-h-screen">
        {/* Availability capsule — left */}
        <FadeIn
          immediate
          delay={0.8}
          y={14}
          className="absolute inset-x-0 top-[26vh] flex justify-center lg:inset-x-auto lg:left-container-lg lg:top-[47%] lg:justify-start"
        >
          <p className="pointer-events-auto flex items-center gap-2.5 rounded-full border border-line700 bg-coal-soft/60 px-4 py-2.5 backdrop-blur-sm">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-acid" aria-hidden />
            <span className="label">Available for new opportunities</span>
          </p>
        </FadeIn>

        {/* Specialization — right */}
        <FadeIn
          immediate
          delay={0.95}
          y={14}
          className="absolute right-container-md top-[47%] hidden max-w-[230px] text-right md:block lg:right-container-lg"
        >
          <p className="text-sm leading-relaxed text-ink-dim">
            Specialized in brand identity, product design, and front-end
            development.
          </p>
        </FadeIn>

        {/* Name — bottom left, in front of the figure */}
        <div className="absolute bottom-[6vh] left-container md:left-container-md lg:left-container-lg">
          <SplitReveal
            as="p"
            mode="words"
            immediate
            delay={0.55}
            className="text-display tracking-display text-[12vw] uppercase leading-[0.95] lg:text-[7vw]"
          >
            I am
          </SplitReveal>
          <SplitReveal
            as="p"
            mode="words"
            immediate
            delay={0.65}
            className="text-display tracking-display text-[12vw] uppercase leading-[0.95] lg:text-[7vw]"
          >
            Zaki
          </SplitReveal>
        </div>

        {/* Discipline — bottom right */}
        <div className="absolute bottom-[6vh] right-container text-right md:right-container-md lg:right-container-lg">
          {["Brand &", "Product", "Designer"].map((line, i) => (
            <SplitReveal
              key={line}
              as="p"
              mode="words"
              immediate
              delay={0.75 + i * 0.08}
              className="text-display tracking-display text-[5.5vw] uppercase leading-[1.02] lg:text-[2.8vw]"
            >
              {line}
            </SplitReveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Hero;
