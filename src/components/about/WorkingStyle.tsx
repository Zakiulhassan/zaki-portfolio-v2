import React from "react";
import Link from "next/link";
import Container from "../widgets/Container";
import { FadeIn, ScrubWords } from "../motion/SplitReveal";

/**
 * About scene 06 — closing statement on how engagements run, with the
 * call to action. No tabs segmented by audience, one direct paragraph.
 */
const WorkingStyle = () => {
  return (
    <section className="border-b border-line700 bg-coal">
      <Container>
        <div className="flex flex-col gap-12 py-24 sm:py-32">
          <p className="label">
            06 <span className="text-acid">/</span> Working style
          </p>
          <ScrubWords className="max-w-3xl text-[clamp(1.5rem,3.4vw,2.6rem)] font-medium leading-[1.3] tracking-heading text-ink">
            I slot into existing teams without drama, or run a project end to
            end on my own. Give me the problem and the constraints — you get
            options, the reasoning behind each one, and files that are ready
            to ship, because I&apos;m the one who builds them.
          </ScrubWords>
          <FadeIn delay={0.2} className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="mailto:zakihassan555@gmail.com" data-cursor="hover" className="btn btn-primary">
              Start a conversation
            </Link>
            <Link href="/case-studies" data-cursor="hover" className="btn btn-secondary">
              View work
            </Link>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};

export default WorkingStyle;
