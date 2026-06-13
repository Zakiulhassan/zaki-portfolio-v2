"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import HoverRoll from "../motion/HoverRoll";

const EASE = [0.6, 0.01, 0.05, 1] as const;

const links = [
  { to: "/", label: "Home", num: "01" },
  { to: "/case-studies", label: "Work", num: "02" },
  { to: "/services", label: "Services", num: "03" },
  { to: "/about-me", label: "About", num: "04" },
  { to: "/book-a-call", label: "Contact", num: "05" },
];

export function FigmaNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const h = document.documentElement;
      setScrolled(h.scrollTop > 16);
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);

      const y = h.scrollTop;
      const delta = y - lastY;
      if (y < 80) {
        setHidden(false);
      } else if (delta > 4) {
        setHidden(true);
      } else if (delta < -4) {
        setHidden(false);
      }
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to.split("#")[0]) && to !== "/");

  return (
    <>
      <header
        className={`header-scroll fixed top-0 left-0 right-0 z-50 transition-[backdrop-filter,background-color,border-color,transform] duration-500 ${
          scrolled
            ? "backdrop-blur-md bg-[rgba(13,13,11,0.7)] border-b border-[var(--border-c)]"
            : "bg-transparent border-b border-transparent"
        } ${hidden && !open ? "header-hidden" : ""}`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-10">
          <Link href="/" aria-label="Zaki ul Hassan — home" className="group flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border-c)] font-mono text-[11px] tracking-widest text-[var(--text)] transition-colors group-hover:border-[var(--signal)] group-hover:text-[var(--signal)]">
              ZH
            </span>
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {links.map((l) => {
              const active = isActive(l.to);
              return (
                <Link
                  key={l.to}
                  href={l.to}
                  aria-label={l.label}
                  className={`group relative text-[13px] transition-colors ${
                    active ? "text-[var(--text)]" : "text-[var(--muted)] hover:text-[var(--text)]"
                  }`}
                >
                  <HoverRoll>{l.label}</HoverRoll>
                  {active && (
                    <span
                      className="absolute -bottom-2 left-0 h-px w-full"
                      style={{ background: "var(--signal)" }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/book-a-call"
              className="rounded-full border border-[var(--border-c)] px-4 py-2 text-[12px] text-[var(--text)] transition-colors hover:border-[var(--signal)] hover:text-[var(--signal)]"
            >
              Book a Call
            </Link>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className="flex flex-col gap-1.5 p-2 md:hidden"
            aria-label="Menu"
          >
            <span className={`block h-px w-6 bg-[var(--text)] transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-[var(--text)] transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </button>
        </div>
        <div className="h-px w-full bg-transparent">
          <div className="h-px transition-[width] duration-150" style={{ width: `${progress}%`, background: "var(--signal)" }} />
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: "var(--bg)" }}
          >
            <div className="flex h-full flex-col justify-between px-6 pb-10 pt-24">
              <ul className="flex flex-col gap-2">
                {links.map((l, i) => (
                  <motion.li
                    key={l.to}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.6 }}
                    className="border-b border-[var(--border-c)]"
                  >
                    <Link href={l.to} className="flex items-baseline justify-between py-5">
                      <span className="text-[42px] tracking-tight text-[var(--text)]">{l.label}</span>
                      <span className="font-mono text-[11px] text-[var(--muted)]">{l.num}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="space-y-3 font-mono text-[11px] uppercase tracking-widest text-[var(--muted)]">
                <div>hello@zakiulhassan.design</div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--signal)" }} />
                  Available for selected work
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
