import React from "react";
import Container from "../widgets/Container";
import { FadeIn } from "../motion/SplitReveal";

// TODO(zaki): replace with real client quotes, names, and roles.
const QUOTES = [
  {
    body: "Zaki transformed our website, boosting conversions with his user-centric design approach.",
    name: "Daniel Reed",
    role: "Founder, Novastudio",
  },
  {
    body: "Working with Zaki was a breeze. The final product exceeded our expectations.",
    name: "Sarah Nguyen",
    role: "Product Manager, NovaSync",
  },
];

/**
 * Scene 07 — proof signals. Two editorial pull-quotes set in the serif,
 * with precise mono attributions. No cards, no carousel, no avatars.
 */
const ProofSignals = () => {
  return (
    <section className="border-t border-line700 bg-coal">
      <Container>
        <div className="flex flex-col gap-20 py-28 sm:py-36">
          <p className="label">
            07 <span className="text-acid">/</span> Proof
          </p>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
            {QUOTES.map((q, i) => (
              <FadeIn key={q.name} delay={i * 0.12} y={28}>
                <figure className={`flex max-w-xl flex-col gap-8 ${i === 1 ? "lg:mt-24" : ""}`}>
                  <blockquote className="font-serif text-[clamp(1.5rem,2.6vw,2.4rem)] italic leading-[1.25] text-ink">
                    &ldquo;{q.body}&rdquo;
                  </blockquote>
                  <figcaption className="flex items-baseline gap-4">
                    <span className="h-px w-10 bg-line700" aria-hidden />
                    <span className="label !text-ink">{q.name}</span>
                    <span className="label">{q.role}</span>
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="self-end">
            <p className="label">Working with startups &amp; product teams since 2018</p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};

export default ProofSignals;
