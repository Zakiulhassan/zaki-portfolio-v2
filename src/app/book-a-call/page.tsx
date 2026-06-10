import React from "react";
import Container from "@/components/widgets/Container";
import { SplitReveal, FadeIn } from "@/components/motion/SplitReveal";
import ShinyButton from "@/components/UI/shiny-button";
import { LuArrowUpRight, LuMail } from "react-icons/lu";
import Link from "next/link";

const BookACall = () => {
  return (
    <section className="bg-coal min-h-screen pt-32 pb-24 text-ink">
      <Container>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <span className="text-sm uppercase tracking-[0.4em] text-ink-dim">
              Let&apos;s Talk
            </span>
            <SplitReveal
              as="h1"
              mode="words"
              immediate
              className="text-display text-[14vw] leading-[0.92] sm:text-[10vw] lg:text-[7vw]"
            >
              Book a Call
            </SplitReveal>
          </div>

          <FadeIn delay={0.2} className="max-w-2xl">
            <p className="font-serif-accent text-2xl text-ink-dim sm:text-3xl">
              Tell me about your project — I&apos;ll get back to you within 24
              hours to schedule a free 30-minute strategy call.
            </p>
          </FadeIn>

          <FadeIn delay={0.35} className="flex flex-wrap items-center gap-4">
            <Link
              href="https://calendly.com/zakiulhassan/30min"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
            >
              <ShinyButton className="text-lg">
                Schedule on Calendly
              </ShinyButton>
            </Link>

            <Link
              href="mailto:zakihassan555@gmail.com"
              data-cursor="hover"
              className="link-sweep flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 uppercase tracking-widest text-ink transition-colors hover:border-acid hover:text-acid"
            >
              <LuMail /> Email Me <LuArrowUpRight />
            </Link>
          </FadeIn>

          <FadeIn delay={0.5} className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              src="https://calendly.com/zakiulhassan/30min"
              width="100%"
              height="700"
              className="bg-coal-soft"
              title="Schedule a call with Zaki ul Hassan"
            />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};

export default BookACall;
