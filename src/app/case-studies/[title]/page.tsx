"use client";

import React from "react";
import Link from "next/link";
import Container from "@/components/widgets/Container";
import { FadeIn, SplitReveal } from "@/components/motion/SplitReveal";
import ParallaxImage from "@/components/motion/ParallaxImage";
import CountUp from "@/components/motion/CountUp";
import { LuArrowUpRight } from "react-icons/lu";

interface CaseStudy {
  slug: string;
  title: string;
  role: string;
  year: string;
  tags: string[];
  heroImage: string;
  intro: string;
  context: string;
  challenge: string;
  constraints: string[];
  diagnosis: string;
  decisions: { title: string; body: string }[];
  process: { caption: string; src: string }[];
  finalScreens: { caption: string; src: string }[];
  designSystem: string;
  results: { value: number; suffix: string; text: string }[];
  reflection: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "cleanly",
    title: "Cleanly",
    role: "Design & build",
    year: "2024",
    tags: ["Service platform", "UX/UI", "Next.js"],
    heroImage: "/case-studies/cleanly-hero.png",
    intro: "A booking flow customers and admins both rely on.",
    context:
      "Cleanly is an on-demand cleaning service for homes and offices. Bookings are the entire business — if scheduling feels uncertain, the customer calls a competitor instead. The brief was to design and build both the customer-facing booking flow and the admin dashboard that runs on the same data.",
    challenge:
      "Scheduling a cleaning sounds simple until you model it: recurring visits, variable home sizes, add-on services, provider availability. The existing flow exposed all of that complexity to the customer at once, and people abandoned it before reaching checkout.",
    constraints: [
      "One person owning design and code — no handoff, no spec drift.",
      "Admins needed to manage recurring bookings without phone calls.",
      "Real-time availability had to stay accurate across both surfaces.",
    ],
    diagnosis:
      "The booking form was asking customers to think like the database — picking a service type, a frequency, an add-on bundle and a time slot all on one screen. Admins, meanwhile, had no single view of \"what's happening today,\" so every recurring change became a manual lookup.",
    decisions: [
      {
        title: "One decision per step",
        body: "Split the booking flow into a short sequence — service, then size, then time — with real-time availability so customers never pick a slot that bounces.",
      },
      {
        title: "Shared data model, different views",
        body: "Customer and admin interfaces read from the same booking model. The admin dashboard reorganizes it around today's schedule instead of a flat list.",
      },
      {
        title: "Recurring bookings as a first-class object",
        body: "Recurring visits became editable in two clicks — reschedule, pause, or swap a provider — instead of a support ticket.",
      },
    ],
    process: [
      { caption: "Booking flow audit", src: "/case-studies/cleanly-hero.png" },
      { caption: "Shipped interface", src: "/cleanly-home.png" },
    ],
    finalScreens: [
      { caption: "Customer booking flow", src: "/cleanly-home.png" },
      { caption: "Admin schedule view", src: "/case-studies/cleanly-hero.png" },
    ],
    designSystem:
      "A small set of components — service cards, time-slot chips, and a status-driven badge system — shared between the customer site and the admin dashboard, so a change to one updates both.",
    results: [
      { value: 200, suffix: "%", text: "Faster customer onboarding after the booking flow redesign." },
      { value: 70, suffix: "%", text: "Of visits used the new service customization options." },
    ],
    reflection:
      "Owning both ends meant the design never had to be translated — what I drew is what shipped. The biggest lesson was that the admin view, not the customer flow, was where the real complexity belonged.",
  },
  {
    slug: "furnium",
    title: "Furnium",
    role: "Product design",
    year: "2024",
    tags: ["E-commerce", "Research", "UI system"],
    heroImage: "/case-studies/furnium-hero.png",
    intro: "A store as quiet and considered as the furniture it sells.",
    context:
      "Furnium sells minimalist furniture — a product people judge almost entirely by how it looks. The brief was a storefront that got out of the photography's way without losing the information shoppers need to commit to a purchase.",
    challenge:
      "Premium furniture buyers browse like gallery visitors but buy like accountants. The catalogue felt louder than the products it was selling, and the interface had to hold both modes at once: full-bleed imagery that sells the look, and specs, dimensions, and delivery costs one tap away when the decision gets serious.",
    constraints: [
      "Photography had to remain the primary layout element, not a card thumbnail.",
      "Filtering needed to match how buyers think — room, style, budget — not catalog taxonomy.",
      "Every product page had to answer fit, material, and delivery without feeling like a spec sheet.",
    ],
    diagnosis:
      "User interviews showed people shopping by room and mood, but the existing navigation was organized by manufacturer SKU groupings. The mismatch meant visitors fell back on search, which returned flat grids that buried the photography that was supposed to sell the piece.",
    decisions: [
      {
        title: "Photography owns the layout",
        body: "Stripped the UI back until full-bleed product imagery carries the story, with type and controls living in the margins.",
      },
      {
        title: "Filter by how people shop",
        body: "Replaced manufacturer taxonomy with room, style, and budget filters that match the way buyers actually browse.",
      },
      {
        title: "Three answers, always visible",
        body: "Every product page leads with fit, material, and delivery — the three questions that kill furniture purchases when left unanswered.",
      },
    ],
    process: [
      { caption: "Catalogue audit", src: "/furnium-header.png" },
      { caption: "Layout exploration", src: "/furnium-solution.png" },
    ],
    finalScreens: [
      { caption: "Storefront", src: "/furnium-website.png" },
      { caption: "Product detail", src: "/case-studies/furnium-hero.png" },
    ],
    designSystem:
      "A photography-first grid with a single typographic voice for product names and specs, and a restrained filter system that reads as editorial copy rather than form controls.",
    results: [
      { value: 150, suffix: "%", text: "Increase in user engagement after launch." },
      { value: 95, suffix: "%", text: "Of tested users rated the new navigation positively." },
    ],
    reflection:
      "The store works because most of it disappears. The hardest part was resisting the urge to add more UI — every control we removed made the photography do more of the selling.",
  },
  {
    slug: "rivo",
    title: "Rivo",
    role: "Product design",
    year: "2023",
    tags: ["Tech retail", "UX/UI", "Mobile"],
    heroImage: "/case-studies/rivo-hero.png",
    intro: "Discovery to checkout with fewer steps in between.",
    context:
      "Rivo is an online electronics store. Tech shoppers compare obsessively before they buy, and the brief was to make comparison the fastest path to checkout instead of a detour away from it.",
    challenge:
      "A graphics card has forty specifications; a buyer cares about five — and which five depends on who's asking. Dumping spec tables on every screen drove casual buyers away, while hiding them made enthusiasts distrust the store. Shoppers were dropping off between comparison and checkout.",
    constraints: [
      "Spec-readers and gift-buyers needed to be served by the same screens.",
      "Comparison had to live inside the purchase flow, not a separate tool.",
      "Recommendations needed to be framed by use case, not SKU similarity.",
    ],
    diagnosis:
      "Session recordings showed two distinct audiences taking the same path: enthusiasts opening every spec accordion, and casual buyers bouncing the moment they saw one. The funnel treated both as the same user, so neither got what they needed fast enough.",
    decisions: [
      {
        title: "Progressive disclosure by category",
        body: "Every product leads with the handful of specs that drive the decision for its category, with the full sheet one tap deeper.",
      },
      {
        title: "Comparison inside the flow",
        body: "Side-by-side comparison lives inside the purchase flow itself, not a separate page shoppers have to navigate back from.",
      },
      {
        title: "Recommendations framed by use case",
        body: "\"For 4K gaming\" instead of \"similar items\" — recommendations are grouped by what the buyer is trying to do.",
      },
    ],
    process: [
      { caption: "Funnel diagnosis", src: "/case-studies/rivo-hero.png" },
      { caption: "Shipped interface", src: "/rivo-app.png" },
    ],
    finalScreens: [
      { caption: "Product comparison", src: "/rivo-app.png" },
      { caption: "Checkout flow", src: "/case-studies/rivo-hero.png" },
    ],
    designSystem:
      "A spec-table component with two density modes — collapsed for casual buyers, expanded for enthusiasts — and a comparison tray that persists across the browsing and checkout flow.",
    results: [
      { value: 120, suffix: "%", text: "Increase in engagement from personalized recommendations." },
      { value: 80, suffix: "%", text: "Improvement in repeat purchases." },
    ],
    reflection:
      "The fix wasn't simplifying the product — it was letting two different shoppers see two different depths of the same information. Progressive disclosure did more for conversion than any redesign of the checkout itself.",
  },
];

interface PageProps {
  params: { title: string };
}

const SectionLabel = ({ index, name }: { index: string; name: string }) => (
  <p className="label">
    {index} <span className="text-acid">/</span> {name}
  </p>
);

const CaseStudyDetail = ({ params }: PageProps) => {
  const study = CASE_STUDIES.find((s) => s.slug === params.title);
  const index = CASE_STUDIES.findIndex((s) => s.slug === params.title);

  if (!study) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-coal text-ink">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-semibold tracking-heading">Case study not found</h1>
          <Link href="/case-studies" className="btn-ghost">
            <span className="arr">←</span> Back to case studies
          </Link>
        </div>
      </div>
    );
  }

  const next = CASE_STUDIES[(index + 1) % CASE_STUDIES.length];

  return (
    <div className="bg-coal text-ink">
      {/* 01 — Case hero */}
      <section className="border-b border-line700 pt-40 lg:pt-48">
        <Container>
          <div className="flex flex-col gap-10 pb-16">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <SectionLabel index="01" name="Case study" />
                <h1 className="mt-5 text-display tracking-display text-[clamp(3rem,9vw,7rem)] leading-[0.95]">
                  <SplitReveal as="span" mode="words" immediate className="inline">
                    {study.title}
                  </SplitReveal>
                </h1>
              </div>
              <FadeIn delay={0.2} className="max-w-sm text-base leading-relaxed text-ink-dim md:text-right">
                <p>{study.intro}</p>
              </FadeIn>
            </div>
            <FadeIn delay={0.15} className="flex flex-wrap items-baseline gap-x-8 gap-y-2 border-t border-line700 pt-6">
              <span className="label">{study.role}</span>
              <span className="label">{study.year}</span>
              <span className="text-xs uppercase tracking-[0.14em] text-ink-dim/70">
                {study.tags.join(" · ")}
              </span>
            </FadeIn>
          </div>
          <FadeIn delay={0.1} className="overflow-hidden border border-line700">
            <ParallaxImage
              src={study.heroImage}
              alt={`${study.title} case study hero`}
              priority
              sizes="100vw"
              className="aspect-[16/9] w-full"
            />
          </FadeIn>
        </Container>
      </section>

      {/* 02 — Context & 03 — Challenge */}
      <section className="border-b border-line700">
        <Container>
          <div className="grid grid-cols-1 gap-16 py-24 sm:py-28 lg:grid-cols-2 lg:gap-12">
            <FadeIn y={28}>
              <SectionLabel index="02" name="Context" />
              <p className="mt-6 max-w-xl text-[clamp(1.25rem,2vw,1.6rem)] leading-relaxed text-ink">
                {study.context}
              </p>
            </FadeIn>
            <FadeIn y={28} delay={0.1}>
              <SectionLabel index="03" name="The challenge" />
              <p className="mt-6 max-w-xl text-[clamp(1.25rem,2vw,1.6rem)] leading-relaxed text-ink">
                {study.challenge}
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* 04 — Constraints */}
      <section className="border-b border-line700 bg-coal-soft">
        <Container>
          <div className="flex flex-col gap-12 py-24 sm:py-28">
            <SectionLabel index="04" name="Constraints" />
            <div className="flex flex-col">
              {study.constraints.map((c, i) => (
                <FadeIn key={c} delay={i * 0.06} y={24}>
                  <div className="grid grid-cols-[3rem_1fr] gap-x-6 border-t border-line700 py-8">
                    <span className="font-mono text-sm text-ink-dim">{`0${i + 1}`}</span>
                    <p className="max-w-2xl text-base leading-relaxed text-ink-dim sm:text-lg">{c}</p>
                  </div>
                </FadeIn>
              ))}
              <div className="border-t border-line700" />
            </div>
          </div>
        </Container>
      </section>

      {/* 05 — UX diagnosis */}
      <section className="border-b border-line700">
        <Container>
          <div className="flex flex-col gap-8 py-24 sm:py-28">
            <SectionLabel index="05" name="UX diagnosis" />
            <FadeIn delay={0.1} y={28}>
              <p className="max-w-3xl text-[clamp(1.25rem,2.2vw,1.8rem)] leading-relaxed text-ink">
                {study.diagnosis}
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* 06 — Key decisions */}
      <section className="border-b border-line700 bg-coal-soft">
        <Container>
          <div className="flex flex-col gap-16 py-24 sm:py-28">
            <SectionLabel index="06" name="Key decisions" />
            <div className="flex flex-col">
              {study.decisions.map((d, i) => (
                <FadeIn key={d.title} delay={i * 0.07} y={28}>
                  <div className="grid grid-cols-1 gap-x-6 gap-y-3 border-t border-line700 py-10 sm:grid-cols-[3rem_1fr_1.4fr]">
                    <span className="font-mono text-sm text-ink-dim">{`0${i + 1}`}</span>
                    <h3 className="text-display tracking-display text-[clamp(1.6rem,3vw,2.6rem)] leading-tight">
                      {d.title}
                    </h3>
                    <p className="max-w-xl text-base leading-relaxed text-ink-dim sm:text-lg">{d.body}</p>
                  </div>
                </FadeIn>
              ))}
              <div className="border-t border-line700" />
            </div>
          </div>
        </Container>
      </section>

      {/* 07 — Process artifacts */}
      <section className="border-b border-line700">
        <Container>
          <div className="flex flex-col gap-16 py-24 sm:py-28">
            <SectionLabel index="07" name="Process" />
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {study.process.map((p, i) => (
                <FadeIn key={p.caption} delay={i * 0.08} y={32}>
                  <figure className="group flex flex-col gap-3">
                    <div className="overflow-hidden border border-line700">
                      <ParallaxImage
                        src={p.src}
                        alt={p.caption}
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="aspect-[4/3] w-full grayscale transition-[filter] duration-slow ease-brand group-hover:grayscale-0"
                      />
                    </div>
                    <figcaption className="label">
                      {`0${i + 1}`} — {p.caption}
                    </figcaption>
                  </figure>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 08 — Final screens */}
      <section className="border-b border-line700 bg-coal-soft">
        <Container>
          <div className="flex flex-col gap-16 py-24 sm:py-28">
            <SectionLabel index="08" name="Final screens" />
            <div className="flex flex-col gap-8">
              {study.finalScreens.map((s, i) => (
                <FadeIn key={s.caption} delay={i * 0.08} y={32}>
                  <figure className="group flex flex-col gap-3">
                    <div className="overflow-hidden border border-line700">
                      <ParallaxImage
                        src={s.src}
                        alt={s.caption}
                        sizes="100vw"
                        className="aspect-[16/9] w-full"
                      />
                    </div>
                    <figcaption className="label">{s.caption}</figcaption>
                  </figure>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 09 — Design system */}
      <section className="border-b border-line700">
        <Container>
          <div className="flex flex-col gap-8 py-24 sm:py-28">
            <SectionLabel index="09" name="Design system" />
            <FadeIn delay={0.1} y={28}>
              <p className="max-w-3xl text-[clamp(1.25rem,2.2vw,1.8rem)] leading-relaxed text-ink">
                {study.designSystem}
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* 10 — Results & reflection */}
      <section className="border-b border-line700 bg-coal-soft">
        <Container>
          <div className="flex flex-col gap-16 py-24 sm:py-28">
            <SectionLabel index="10" name="Results & reflection" />
            <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-10">
              {study.results.map((r, i) => (
                <FadeIn key={r.text} delay={i * 0.1} y={28}>
                  <div className="flex flex-col gap-4 border-t border-line700 pt-8">
                    <p className="text-display tracking-display text-[clamp(2.4rem,5vw,4rem)] leading-none text-ink">
                      <CountUp value={r.value} suffix={r.suffix} />
                    </p>
                    <p className="max-w-xs text-base leading-relaxed text-ink-dim">{r.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.2} y={28} className="border-t border-line700 pt-10">
              <p className="max-w-3xl text-base leading-relaxed text-ink-dim sm:text-lg">{study.reflection}</p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Next case study */}
      <section className="bg-coal">
        <Container>
          <Link
            href={`/case-studies/${next.slug}`}
            data-cursor="hover"
            className="group flex flex-col gap-6 py-24 sm:py-32"
          >
            <span className="label">Next case study</span>
            <span className="flex items-center gap-4 text-display tracking-display text-[clamp(2.5rem,9vw,7rem)] leading-none transition-transform duration-base ease-brand group-hover:translate-x-3">
              {next.title}
              <LuArrowUpRight className="h-[0.5em] w-[0.5em] text-ink-dim opacity-0 transition-opacity duration-base group-hover:opacity-100" />
            </span>
          </Link>
        </Container>
      </section>
    </div>
  );
};

export default CaseStudyDetail;
