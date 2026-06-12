import { CSSProperties } from "react";

const NBSP = " ";

/**
 * Letter-stagger roll hover: each letter slides up out of an overflow-hidden
 * clip while a duplicate rises from below, staggered 30ms per letter.
 * Pure CSS transitions (see `.hover-roll` in globals.css) — trigger is the
 * component itself or any ancestor with the `group` class.
 */
const HoverRoll = ({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) => {
  return (
    <span className={`hover-roll ${className}`}>
      <span className="sr-only">{children}</span>
      {children.split("").map((char, i) => (
        <span
          key={i}
          aria-hidden
          className="hr-letter"
          style={{ "--hr-i": i } as CSSProperties}
        >
          <span className="hr-a">{char === " " ? NBSP : char}</span>
          <span className="hr-b">{char === " " ? NBSP : char}</span>
        </span>
      ))}
    </span>
  );
};

export default HoverRoll;
