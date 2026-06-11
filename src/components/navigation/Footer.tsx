"use client";

import Link from "next/link";
import Container from "../widgets/Container";
import { SplitReveal, FadeIn } from "../motion/SplitReveal";
import Magnetic from "../motion/Magnetic";
import HoverRoll from "../motion/HoverRoll";
import { LuArrowUpRight } from "react-icons/lu";

const SOCIALS = [
  { label: "Behance", href: "https://www.behance.net/zakiulhassan5" },
  { label: "Dribbble", href: "https://dribbble.com/zakihassan5" },
  { label: "GitHub", href: "https://github.com/Zakiulhassan" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/zaki-ul-hassan/" },
];

const Footer = () => {
  return (
    <footer className="relative z-30 border-t border-line700 bg-coal-soft text-ink">
      <Container>
        <div className="flex flex-col gap-12 py-24">
          <div className="flex flex-col gap-6">
            <span className="label">Got a project in mind?</span>
            <h2 className="text-display tracking-display text-[13vw] leading-[0.95] sm:text-[9vw] lg:text-[8vw]">
              <SplitReveal as="span" mode="words" className="inline">
                Let&apos;s make it easier to
              </SplitReveal>{" "}
              <SplitReveal as="span" mode="words" className="inline text-acid">
                trust.
              </SplitReveal>
            </h2>
            <FadeIn delay={0.15} className="max-w-xl">
              <p className="text-base text-ink-dim sm:text-lg">
                Have a product or website that needs more clarity? I&apos;m
                always open to talking it through.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="mailto:zakihassan555@gmail.com"
                data-cursor="hover"
                className="btn btn-primary"
              >
                Start a Conversation
              </Link>
              <Link href="/case-studies" data-cursor="hover" className="btn btn-secondary">
                View Work
              </Link>
            </FadeIn>
          </div>

          <div className="flex flex-col items-start justify-between gap-8 border-t border-line700 pt-10 md:flex-row md:items-end">
            <div className="text-sm text-ink-dim">
              <p>
                Designed &amp; developed by <br />
                <span className="text-2xl text-ink">Zaki ul Hassan</span>
              </p>
            </div>

            <ul className="flex flex-wrap gap-x-8 gap-y-4 text-sm uppercase tracking-widest">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <Magnetic strength={0.4}>
                    <Link
                      href={social.href}
                      target="_blank"
                      data-cursor="hover"
                      className="flex items-center gap-1 text-ink transition-colors hover:text-acid"
                    >
                      <HoverRoll>{social.label}</HoverRoll>
                      <LuArrowUpRight className="text-acid" />
                    </Link>
                  </Magnetic>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3 border-t border-line700 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="label">
              &copy;{new Date().getFullYear()} Zaki ul Hassan — Designed &amp;
              built by Zaki
            </p>
            <p className="label">PK — UTC+5 · All rights reserved</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
