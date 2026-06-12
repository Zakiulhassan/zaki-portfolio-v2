import React from "react";
import { SplitReveal } from "../motion/SplitReveal";

/**
 * Scene header: small mono index label over an oversized editorial title.
 * The optional accent word renders in the serif italic, echoing the hero.
 */
const SceneTitle = ({
  index,
  name,
  title,
  accent,
  className = "",
}: {
  index: string;
  name: string;
  title: string;
  accent?: string;
  className?: string;
}) => {
  return (
    <div className={className}>
      <p className="label">
        {index} <span className="text-acid">/</span> {name}
      </p>
      <h2 className="mt-5 text-display tracking-display text-[clamp(2.5rem,6vw,6.5rem)] leading-[1]">
        <SplitReveal as="span" mode="words" className="inline">
          {title}
        </SplitReveal>
        {accent && (
          <>
            {" "}
            <SplitReveal
              as="span"
              mode="words"
              delay={0.12}
              className="inline font-serif font-normal italic tracking-normal"
            >
              {accent}
            </SplitReveal>
          </>
        )}
      </h2>
    </div>
  );
};

export default SceneTitle;
