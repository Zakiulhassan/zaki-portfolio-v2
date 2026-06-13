"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import { FigmaPageHeader } from "@/components/figma/FigmaPageHeader";
import { MagneticButton } from "@/components/figma/MagneticButton";
import { Reveal } from "@/components/figma/Reveal";

const projectTypes = ["Product Design", "UX/UI", "Website", "Design System", "Other"];
const budgets = ["< $5k", "$5k — $15k", "$15k — $40k", "$40k+"];
const timelines = ["ASAP", "1 — 3 months", "3 — 6 months", "Flexible"];

export default function BookACallPage() {
  const [type, setType] = useState(projectTypes[0]);
  const [budget, setBudget] = useState(budgets[1]);
  const [timeline, setTimeline] = useState(timelines[1]);
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="relative" style={{ background: "var(--bg)", color: "var(--text)" }}>
      <FigmaPageHeader
        num="05"
        kicker="Contact · Book a Call"
        title="Tell me what"
        italic="you're building."
        subtitle="Share the product, website, or interface you need help with. I'll review the details and suggest the best way forward."
      />

      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-12 gap-6">
          <Reveal className="col-span-12 md:col-span-7">
            <form
              onSubmit={submit}
              className="border border-[var(--border-c)] p-6 md:p-10"
              style={{ background: "var(--surface)" }}
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Field label="Name" placeholder="Your full name" />
                <Field label="Email" type="email" placeholder="you@company.com" />
              </div>

              <div className="mt-8">
                <Label>Project type</Label>
                <ChipGroup options={projectTypes} value={type} onChange={setType} />
              </div>

              <div className="mt-8">
                <Label>Budget</Label>
                <ChipGroup options={budgets} value={budget} onChange={setBudget} />
              </div>

              <div className="mt-8">
                <Label>Timeline</Label>
                <ChipGroup options={timelines} value={timeline} onChange={setTimeline} />
              </div>

              <div className="mt-8">
                <Label>What do you need help with?</Label>
                <textarea
                  rows={5}
                  placeholder="What you're building, what's not working, what needs to improve…"
                  className="mt-3 w-full resize-none border border-[var(--border-c)] bg-transparent p-4 text-[15px] outline-none transition-colors focus:border-[var(--signal)]"
                />
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                  <span style={{ color: "var(--signal)" }}>●</span> Replies within 24 hours
                </p>
                <button
                  type="submit"
                  className="group relative inline-flex items-center gap-3 rounded-full bg-[var(--signal)] px-6 py-3 text-[14px] text-[var(--bg)] transition-colors duration-300 hover:bg-[var(--text)]"
                >
                  {sent ? "Sent ✓" : "Send Message"}
                </button>
              </div>
              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em]"
                  style={{ color: "var(--signal)" }}
                >
                  Thanks — I&apos;ll be in touch shortly.
                </motion.p>
              )}
            </form>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-4 md:col-start-9" delay={0.1}>
            <div className="space-y-10">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">/ Direct</p>
                <ul className="mt-4 space-y-2 text-[16px]">
                  <li>
                    <a className="link-underline" href="mailto:zakihassan555@gmail.com">
                      zakihassan555@gmail.com
                    </a>
                  </li>
                  <li className="text-[var(--muted)]">Karachi · GMT+5</li>
                </ul>
              </div>

              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                  / Prefer a call?
                </p>
                <p className="mt-4 text-[14px] leading-relaxed text-[var(--muted)]">
                  Skip the form and grab a free 30-minute slot directly on Calendly.
                </p>
                <MagneticButton to="https://calendly.com/zakiulhassan/30min" className="mt-5" variant="ghost">
                  Schedule on Calendly
                </MagneticButton>
              </div>

              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
                  / Helpful prompts
                </p>
                <ul className="mt-4 space-y-3 text-[14px] text-[var(--muted)]">
                  <li>· What are you building?</li>
                  <li>· What is not working?</li>
                  <li>· What needs to improve?</li>
                  <li>· What support do you need?</li>
                  <li>· What is your timeline?</li>
                </ul>
              </div>

              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "var(--signal)" }}>
                  ● Availability
                </p>
                <p className="mt-4 text-[14px] text-[var(--muted)]">
                  Available for selected freelance projects, agency support, and senior product
                  design opportunities.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function Label({ children }: { children: ReactNode }) {
  return (
    <label className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">{children}</label>
  );
}

function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-3 w-full border-b border-[var(--border-c)] bg-transparent py-3 text-[16px] outline-none transition-colors focus:border-[var(--signal)]"
      />
    </div>
  );
}

function ChipGroup({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {options.map((o) => {
        const active = o === value;
        return (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            className="rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] transition-colors"
            style={{
              borderColor: active ? "var(--signal)" : "var(--border-c)",
              color: active ? "var(--signal)" : "var(--muted)",
            }}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}
