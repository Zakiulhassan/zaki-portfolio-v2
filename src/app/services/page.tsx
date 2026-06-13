import { FigmaPageHeader } from "@/components/figma/FigmaPageHeader";
import { Reveal } from "@/components/figma/Reveal";
import { FigmaProcess } from "@/components/figma/FigmaProcess";
import { FigmaFinalCTA } from "@/components/figma/FigmaFinalCTA";

const services = [
  {
    n: "01",
    title: "Product Design",
    body: "End-to-end product design for SaaS, AI, dashboards, mobile apps, and complex web platforms.",
    deliverables: ["User flows", "Information architecture", "Wireframes", "Hi-fi screens", "Prototypes"],
  },
  {
    n: "02",
    title: "UX/UI Design",
    body: "Interface design grounded in real use — components, states, and responsive behavior that hold up in production.",
    deliverables: ["Design system", "Component library", "Responsive screens", "Interaction notes", "Handoff"],
  },
  {
    n: "03",
    title: "Website Design",
    body: "Website structure, landing pages, marketing pages, and portfolio sites that present the product clearly.",
    deliverables: ["Sitemap", "Landing pages", "Marketing pages", "Responsive design", "Frontend-aware handoff"],
  },
];

const bestFit = [
  "Product redesigns",
  "Website improvements",
  "Dashboard UX",
  "Agency design support",
  "Design systems",
  "Frontend-aware handoff",
];

const notFit = [
  "Copying another website exactly",
  "Cheap rushed work",
  "Decoration without UX thinking",
  "Projects with no clear goal",
  "Fake metrics or exaggerated claims",
];

export default function ServicesPage() {
  return (
    <div className="relative" style={{ background: "var(--bg)", color: "var(--text)" }}>
      <FigmaPageHeader
        title="Design support"
        italic="for digital products."
        subtitle="I help teams improve product flows, interfaces, websites, and design systems."
      />

      <section className="mx-auto max-w-[1440px] px-6 pt-16 md:px-10 md:pt-24">
        <ul className="divide-y divide-[var(--border-c)] border-y border-[var(--border-c)]">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <li className="grid grid-cols-12 gap-6 py-12 md:py-20">
                <span className="col-span-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)] md:col-span-1">
                  / {s.n}
                </span>
                <div className="col-span-10 md:col-span-5">
                  <h2 className="text-[clamp(36px,5vw,72px)] tracking-tight">{s.title}</h2>
                  <p className="mt-6 max-w-md text-[16px] leading-relaxed text-[var(--muted)] md:text-[18px]">
                    {s.body}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-5 md:col-start-8">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                    Deliverables
                  </p>
                  <ul className="mt-6 space-y-3 border-t border-[var(--border-c)] pt-4">
                    {s.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-center justify-between border-b border-[var(--border-c)] py-2 text-[15px]"
                      >
                        <span>{d}</span>
                        <span style={{ color: "var(--signal)" }}>+</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Best fit / not a fit */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-40">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--signal)" }}>
              ● Best Fit
            </p>
            <ul className="mt-8 space-y-4 border-t border-[var(--border-c)] pt-6">
              {bestFit.map((t) => (
                <li key={t} className="flex items-center justify-between border-b border-[var(--border-c)] pb-3 text-[18px]">
                  <span>{t}</span>
                  <span className="font-mono text-[11px] text-[var(--muted)]">YES</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
              ○ Not a Good Fit
            </p>
            <ul className="mt-8 space-y-4 border-t border-[var(--border-c)] pt-6">
              {notFit.map((t) => (
                <li
                  key={t}
                  className="flex items-center justify-between border-b border-[var(--border-c)] pb-3 text-[18px] text-[var(--muted)] line-through decoration-[var(--border-c)]"
                >
                  <span>{t}</span>
                  <span className="font-mono text-[11px]">NO</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FigmaProcess />
      <FigmaFinalCTA />
    </div>
  );
}
