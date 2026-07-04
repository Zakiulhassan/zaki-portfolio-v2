"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  children: ReactNode;
  to?: string;
  variant?: "primary" | "ghost";
  className?: string;
  arrow?: boolean;
  onClick?: () => void;
};

export function MagneticButton({
  children,
  to,
  variant = "primary",
  className = "",
  arrow = true,
  onClick,
}: Props) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.25}px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  const base = `group relative inline-flex items-center rounded-full px-6 py-3 text-[14px] transition-colors duration-300 will-change-transform${
    variant === "primary" ? "" : " gap-3"
  }`;
  const styles =
    variant === "primary"
      ? "bg-[var(--signal)] text-[var(--bg)] hover:bg-[var(--text)]"
      : "border border-[var(--border-c)] text-[var(--text)] hover:border-[var(--signal)] hover:text-[var(--signal)]";

  const showArrow = arrow && variant !== "primary";

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <ArrowUpRight
          size={16}
          className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link
        ref={ref as never}
        href={to}
        data-cursor="hover"
        onMouseMove={onMove}
        onMouseLeave={reset}
        className={`${base} ${styles} ${className}`}
      >
        {inner}
      </Link>
    );
  }
  return (
    <button
      ref={ref as never}
      onMouseMove={onMove}
      onMouseLeave={reset}
      onClick={onClick}
      className={`${base} ${styles} ${className}`}
    >
      {inner}
    </button>
  );
}
