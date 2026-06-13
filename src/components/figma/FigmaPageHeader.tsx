import { Reveal, RevealLines } from "./Reveal";

export function FigmaPageHeader({
  title,
  italic,
  subtitle,
}: {
  title: string;
  italic?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative pt-36 md:pt-44">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <h1 className="h-section text-[var(--text)]">
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
