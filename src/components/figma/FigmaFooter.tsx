import Link from "next/link";

const sitemap: [string, string][] = [
  ["Home", "/"],
  ["Work", "/case-studies"],
  ["Services", "/#services"],
  ["About", "/about-me"],
  ["Contact", "/book-a-call"],
];

const elsewhere = ["LinkedIn", "Dribbble", "Read.cv", "Twitter / X"];

export function FigmaFooter() {
  return (
    <footer id="contact" className="border-t border-[var(--border-c)]" style={{ background: "var(--bg)" }}>
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">/ Get in touch</p>
            <h2 className="mt-6 text-[clamp(40px,5vw,72px)] leading-[0.95] tracking-tight text-[var(--text)]">
              Have a project
              <br />
              <span className="font-serif italic text-[var(--muted)]">in mind?</span>
            </h2>
            <a href="mailto:hello@zakiulhassan.design" className="link-underline mt-6 inline-block text-[18px] text-[var(--text)]">
              hello@zakiulhassan.design
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">/ Sitemap</p>
            <ul className="mt-6 space-y-2 text-[15px]">
              {sitemap.map(([l, t]) => (
                <li key={t}>
                  <Link href={t} className="link-underline text-[var(--muted)] hover:text-[var(--text)]">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">/ Elsewhere</p>
            <ul className="mt-6 space-y-2 text-[15px]">
              {elsewhere.map((s) => (
                <li key={s}>
                  <a href="#" className="link-underline text-[var(--muted)] hover:text-[var(--text)]">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-[var(--border-c)] pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
            © {new Date().getFullYear()} Zaki ul Hassan — All rights reserved
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
            Designed &amp; built with care · Karachi, PK
          </p>
        </div>

        <div
          aria-hidden
          className="mt-16 select-none text-center text-[clamp(80px,18vw,260px)] leading-[0.85] tracking-tighter"
          style={{ color: "transparent", WebkitTextStroke: "1px var(--border-c)" }}
        >
          ZAKI<span className="font-serif italic">·</span>UL<span className="font-serif italic">·</span>HASSAN
        </div>
      </div>
    </footer>
  );
}
