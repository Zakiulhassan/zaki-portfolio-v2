import { CSSProperties } from "react";

const NBSP = " ";

/**
 * Letter-stagger roll hover: each letter slides up out of an overflow-hidden
 * clip while a duplicate rises from below, staggered 30ms per letter.
 * The duplicate is a CSS pseudo-element (content: attr(data-char)) so the
 * label exists exactly once in the DOM text — crawlers read "Work", not
 * "W W o o r r k k". The whole span is aria-hidden; the host link carries
 * the accessible name via aria-label.
 */
const HoverRoll = ({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) => {
  return (
    <span className={`hover-roll ${className}`} aria-hidden="true">
      {children.split("").map((char, i) => (
        <span
          key={i}
          className="hr-letter"
          data-char={char === " " ? NBSP : char}
          style={{ "--hr-i": i } as CSSProperties}
        >
          <span className="hr-a">{char === " " ? NBSP : char}</span>
        </span>
      ))}
    </span>
  );
};

export default HoverRoll;
