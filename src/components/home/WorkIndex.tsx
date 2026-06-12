"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Container from "../widgets/Container";
import SceneTitle from "../widgets/SceneTitle";
import { FadeIn } from "../motion/SplitReveal";
import CursorProjectPreview, {
  useCursorPreview,
} from "../motion/CursorProjectPreview";
import { LuArrowUpRight } from "react-icons/lu";

const PROJECTS = [
  {
    idx: "01",
    slug: "cleanly",
    title: "Cleanly",
    line: "A booking flow customers and admins both rely on.",
    problem: "Bookings, reschedules and admin dispatch lived in three disconnected tools.",
    decision: "One shared booking model, surfaced differently for customers and admins.",
    role: "Design & build",
    year: "2024",
    tags: ["Service platform", "UX/UI", "Next.js"],
    preview: "/cleanly-home.png",
  },
  {
    idx: "02",
    slug: "furnium",
    title: "Furnium",
    line: "A store as quiet and considered as the furniture it sells.",
    problem: "The catalogue felt louder than the products it was selling.",
    decision: "Stripped the UI back until the photography carried the story.",
    role: "Product design",
    year: "2024",
    tags: ["E-commerce", "Research", "UI system"],
    preview: "/furnium-website.png",
  },
  {
    idx: "03",
    slug: "rivo",
    title: "Rivo",
    line: "Discovery to checkout with fewer steps in between.",
    problem: "Shoppers were dropping off between comparison and checkout.",
    decision: "Collapsed the funnel into one scrollable, filterable flow.",
    role: "Product design",
    year: "2023",
    tags: ["Tech retail", "UX/UI", "Mobile"],
    preview: "/rivo-app.png",
  },
];

/**
 * Scene 03 — editorial case index. Rows of oversized titles with precise
 * metadata; on pointer devices a floating preview frame trails the cursor
 * over the hovered row, labelled "View case".
 */
const WorkIndex = () => {
  const [active, setActive] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const { finePointer, x, y, onMouseMove } = useCursorPreview();

  return (
    <section className="border-t border-line700 bg-coal">
      <Container>
        <div className="flex flex-col gap-16 py-28 sm:py-36">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SceneTitle index="03" name="Selected work" title="Selected" accent="work" />
            <FadeIn>
              <p className="max-w-xs text-base leading-relaxed text-ink-dim md:text-right">
                Three shipped products. The case studies show the decisions,
                not just the screens.
              </p>
            </FadeIn>
          </div>

          <div
            ref={listRef}
            onMouseMove={finePointer ? onMouseMove : undefined}
            onMouseLeave={() => setActive(null)}
            className="flex flex-col"
          >
            {PROJECTS.map((p, i) => (
              <FadeIn key={p.slug} delay={i * 0.06} y={28}>
                <Link
                  href={`/case-studies/${p.slug}`}
                  data-cursor="hover"
                  onMouseEnter={() => setActive(i)}
                  className={`group grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-3 border-t border-line700 py-10 transition-opacity duration-base ease-brand sm:grid-cols-[3rem_1fr_auto] sm:py-12 ${
                    active !== null && active !== i ? "opacity-30" : "opacity-100"
                  }`}
                >
                  <span className="font-mono text-sm text-ink-dim">{p.idx}</span>
                  <div className="flex flex-col gap-3">
                    <span className="flex items-center gap-4 text-display tracking-display text-[clamp(2.2rem,5vw,5rem)] leading-none transition-transform duration-base ease-brand group-hover:translate-x-3">
                      {p.title}
                      <LuArrowUpRight className="h-[0.55em] w-[0.55em] text-ink-dim opacity-0 transition-opacity duration-base group-hover:opacity-100" />
                    </span>
                    <span className="max-w-md text-base text-ink-dim">{p.line}</span>
                    <div className="grid max-w-lg grid-cols-1 gap-x-8 gap-y-2 pt-2 sm:grid-cols-2">
                      <p className="text-sm leading-relaxed text-ink-dim">
                        <span className="label !text-ink-dim/70">Problem </span>
                        {p.problem}
                      </p>
                      <p className="text-sm leading-relaxed text-ink-dim">
                        <span className="label !text-ink-dim/70">Decision </span>
                        {p.decision}
                      </p>
                    </div>
                  </div>
                  <div className="col-start-2 flex flex-wrap items-baseline gap-x-6 gap-y-1 sm:col-start-3 sm:flex-col sm:items-end sm:text-right">
                    <span className="label">{p.role}</span>
                    <span className="label">{p.year}</span>
                    <span className="text-xs uppercase tracking-[0.14em] text-ink-dim/70">
                      {p.tags.join(" · ")}
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
            <div className="border-t border-line700" />
          </div>

          <FadeIn className="self-start">
            <Link href="/case-studies" data-cursor="hover" className="btn btn-ghost">
              All case studies <span className="arr">→</span>
            </Link>
          </FadeIn>
        </div>
      </Container>

      <CursorProjectPreview
        items={PROJECTS.map((p) => ({ key: p.slug, src: p.preview }))}
        active={active}
        label="View Case"
        finePointer={finePointer}
        x={x}
        y={y}
      />
    </section>
  );
};

export default WorkIndex;
