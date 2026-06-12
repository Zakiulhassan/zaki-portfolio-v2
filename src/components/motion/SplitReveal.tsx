"use client";

import {
  Children,
  ElementType,
  Fragment,
  ReactNode,
  useEffect,
  useRef,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

interface SplitRevealProps {
  children: string;
  as?: ElementType;
  className?: string;
  /** "chars" staggers each letter, "words" each word */
  mode?: "chars" | "words";
  delay?: number;
  /** animate immediately on mount instead of on scroll into view */
  immediate?: boolean;
  stagger?: number;
  duration?: number;
}

/**
 * Masked text reveal: each word/char rises from behind an overflow-hidden
 * clip, the signature editorial reveal used across modern designer portfolios.
 * The full string is exposed to assistive tech via visually-hidden text;
 * the animated fragments are decorative and aria-hidden.
 */
export const SplitReveal = ({
  children,
  as: Tag = "div",
  className = "",
  mode = "words",
  delay = 0,
  immediate = false,
  stagger = 0.04,
  duration = 1.1,
}: SplitRevealProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll<HTMLElement>("[data-split-unit]");

    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        gsap.set(targets, { yPercent: 0, rotate: 0 });
        return;
      }
      gsap.fromTo(
        targets,
        { yPercent: 110, rotate: 3 },
        {
          yPercent: 0,
          rotate: 0,
          duration,
          delay,
          stagger,
          ease: "power4.out",
          ...(immediate
            ? {}
            : {
                scrollTrigger: {
                  trigger: el,
                  start: "top 88%",
                  once: true,
                },
              }),
        }
      );
    }, el);

    return () => ctx.revert();
  }, [children, mode, delay, immediate, stagger, duration]);

  const words = children.split(" ");

  return (
    <Tag ref={ref} className={className} aria-label={children}>
      {words.map((word, wi) => (
        <span
          key={wi}
          aria-hidden="true"
          className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-bottom"
        >
          {mode === "chars" ? (
            word.split("").map((char, ci) => (
              <span
                key={ci}
                data-split-unit
                className="inline-block will-change-transform"
              >
                {char}
              </span>
            ))
          ) : (
            <span data-split-unit className="inline-block will-change-transform">
              {word}
            </span>
          )}
          {wi < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </Tag>
  );
};

/**
 * Named alias for the brief's component system: SplitReveal is the
 * masked-text-reveal primitive.
 */
export const MaskedTextReveal = SplitReveal;

interface LineRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  immediate?: boolean;
  stagger?: number;
}

/** Reveals each direct child as a masked line rising into place. */
export const LineReveal = ({
  children,
  className = "",
  delay = 0,
  immediate = false,
  stagger = 0.12,
}: LineRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll<HTMLElement>("[data-line]");

    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        gsap.set(targets, { yPercent: 0 });
        return;
      }
      gsap.fromTo(
        targets,
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1.2,
          delay,
          stagger,
          ease: "power4.out",
          ...(immediate
            ? {}
            : {
                scrollTrigger: { trigger: el, start: "top 88%", once: true },
              }),
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay, immediate, stagger]);

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child) => (
        <div className="overflow-hidden">
          <div data-line className="will-change-transform">
            {child}
          </div>
        </div>
      ))}
    </div>
  );
};

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  immediate?: boolean;
}

/** Simple scroll-triggered fade-up for blocks (cards, images, paragraphs). */
export const FadeIn = ({
  children,
  className = "",
  delay = 0,
  y = 40,
  immediate = false,
}: FadeInProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        gsap.set(el, { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          delay,
          ease: "power3.out",
          ...(immediate
            ? {}
            : {
                scrollTrigger: { trigger: el, start: "top 90%", once: true },
              }),
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay, y, immediate]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
};

interface ScrubWordsProps {
  children: string;
  className?: string;
}

/**
 * Paragraph whose words brighten from dim to full as the user scrolls
 * through it (scrub-linked, runs both directions).
 */
export const ScrubWords = ({ children, className = "" }: ScrubWordsProps) => {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll<HTMLElement>("[data-word]");

    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) {
        gsap.set(targets, { opacity: 1 });
        return;
      }
      gsap.fromTo(
        targets,
        { opacity: 0.15 },
        {
          opacity: 1,
          stagger: 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 45%",
            scrub: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [children]);

  return (
    <p ref={ref} className={className} aria-label={children}>
      {children.split(" ").map((word, i) => (
        // Space lives outside the inline-block span — a trailing space
        // inside one is trimmed at its line end and words run together.
        <Fragment key={i}>
          <span data-word aria-hidden="true" className="inline-block">
            {word}
          </span>{" "}
        </Fragment>
      ))}
    </p>
  );
};
