export function SectionLabel({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
      <span style={{ color: "var(--signal)" }}>{num}</span>
      <span className="h-px w-8 bg-[var(--border-c)]" />
      <span>{children}</span>
    </div>
  );
}
