"use client";

import Link from "next/link";
import Container from "../widgets/Container";
import { SplitReveal, FadeIn } from "../motion/SplitReveal";
import Magnetic from "../motion/Magnetic";
import { LuArrowUpRight } from "react-icons/lu";

const SOCIALS = [
  { label: "Behance", href: "https://www.behance.net/zakiulhassan5" },
  { label: "Dribbble", href: "https://dribbble.com/zakihassan5" },
  { label: "GitHub", href: "https://github.com/Zakiulhassan" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/zaki-ul-hassan/" },
];

const Footer = () => {
  return (
    <footer className="relative z-30 bg-coal-soft text-ink">
      <Container>
        <div className="flex flex-col gap-12 py-24">
          <div className="flex flex-col gap-6">
            <span className="label">Got a project in mind?</span>
            <h2 className="text-display tracking-display text-[10vw] leading-[1.05] text-ink sm:text-[7vw] lg:text-[4.5vw]">
              <SplitReveal as="span" mode="words" className="inline">
                Have a product or website that needs more clarity? Let&apos;s make it easier to
              </SplitReveal>{" "}
              <SplitReveal as="span" mode="words" className="inline text-acid">
                trust.
              </SplitReveal>
            </h2>

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
                      className="link-sweep flex items-center gap-1 text-ink transition-colors hover:text-acid"
                    >
                      {social.label}
                      <LuArrowUpRight className="text-acid" />
                    </Link>
                  </Magnetic>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-xs uppercase tracking-[0.3em] text-ink-dim">
            &copy; {new Date().getFullYear()} Zaki ul Hassan. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
