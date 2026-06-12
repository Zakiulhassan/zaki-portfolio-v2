import React from "react";
import Container from "../widgets/Container";
import { ScrubWords, FadeIn } from "../motion/SplitReveal";

/**
 * Scene 02 — positioning statement. One sentence, scrub-revealed,
 * with a single quiet support line. Nothing else competes with it.
 */
const Positioning = () => {
  return (
    <section className="bg-coal">
      <Container>
        <div className="flex flex-col gap-16 py-32 sm:py-44">
          <p className="label">
            02 <span className="text-acid">/</span> Positioning
          </p>
          <ScrubWords className="max-w-5xl text-[clamp(1.9rem,4.2vw,4rem)] font-medium leading-[1.15] tracking-heading text-ink">
            I design brand systems and product interfaces that make companies
            feel clear, credible, and easier to trust.
          </ScrubWords>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <FadeIn className="flex flex-wrap gap-x-8 gap-y-3">
              {["Brand Identity", "Product UX", "Interface Systems", "Frontend Implementation"].map(
                (role) => (
                  <span key={role} className="label">
                    {role}
                  </span>
                )
              )}
            </FadeIn>
            <FadeIn className="sm:self-end">
              <p className="max-w-sm text-right text-base leading-relaxed text-ink-dim">
                Brand, product, and front-end handled by one person — so
                nothing gets lost between them.
              </p>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Positioning;
