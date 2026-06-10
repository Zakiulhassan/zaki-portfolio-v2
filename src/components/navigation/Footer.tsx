"use client";

import Link from "next/link";
import Container from "../widgets/Container";
import { SplitReveal } from "../motion/SplitReveal";
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
          <div className="flex flex-col gap-4">
            <span className="text-sm uppercase tracking-[0.4em] text-ink-dim">
              Got a project in mind?
            </span>
            <Link href="/book-a-call" data-cursor="hover">
              <SplitReveal
                as="h2"
                mode="chars"
                className="text-display text-[14vw] leading-[0.92] text-ink transition-colors hover:text-acid sm:text-[10vw] lg:text-[7vw]"
              >
                Let&apos;s Work Together
              </SplitReveal>
            </Link>
          </div>

          <div className="flex flex-col items-start justify-between gap-8 border-t border-white/10 pt-10 md:flex-row md:items-end">
            <div className="text-sm text-ink-dim">
              <p>
                Designed &amp; developed by <br />
                <span className="font-serif-accent text-2xl text-ink">
                  Zaki ul Hassan
                </span>
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
