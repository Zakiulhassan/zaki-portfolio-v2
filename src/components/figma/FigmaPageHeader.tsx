import { Reveal, RevealLines } from "./Reveal";

export function FigmaPageHeader({
  num,
  kicker,
  title,
  italic,
  subtitle,
}: {
  num: string;
  kicker: string;
  title: string;
  italic?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative pt-36 md:pt-44">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
          <span style={{ color: "var(--signal)" }}>{num}</span>
          <span className="h-px w-8 bg-[var(--border-c)]" />
          <span>{kicker}</span>
        </div>
        <h1 className="mt-10 text-[clamp(44px,8vw,140px)] tracking-tight text-[var(--text)]">
          <span aria-hidden="true">
            <RevealLines text={title} />
            {italic && (
              <span className="block font-serif italic text-[var(--muted)]">
                <RevealLines text={italic} />
              </span>
            )}
          </span>
        </h1>
        {subtitle && (
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-[var(--muted)] md:text-[18px]">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
