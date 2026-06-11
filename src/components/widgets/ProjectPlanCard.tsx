import React from 'react';
import { LuArrowUpRight, LuCheck } from 'react-icons/lu';

interface ProjectPlanCardProps {
  index: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  durationText: string;
  listItems: string[];
}

const ProjectPlanCard: React.FC<ProjectPlanCardProps> = ({
  index,
  title,
  description,
  buttonText,
  buttonLink,
  durationText,
  listItems,
}) => {
  return (
    <div className="group flex h-full flex-col gap-6 rounded border border-line700 bg-coal-soft p-8 transition-colors duration-base ease-brand hover:border-acid/40">
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-sm text-ink-dim">{index}</span>
        <span className="rounded-full border border-line700 px-3 py-1 text-xs uppercase tracking-[0.2em] text-ink-dim">
          {durationText}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold tracking-heading leading-snug text-ink">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-ink-dim">{description}</p>
      </div>

      <ul className="flex flex-1 flex-col gap-3 border-t border-line700 pt-6">
        {listItems.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-ink-dim">
            <LuCheck className="mt-0.5 h-4 w-4 shrink-0 text-acid" />
            {item}
          </li>
        ))}
      </ul>

      <a
        href={buttonLink}
        data-cursor="hover"
        className="btn btn-secondary mt-2 w-full justify-center group-hover:border-acid/60"
      >
        {buttonText}
        <LuArrowUpRight />
      </a>
    </div>
  );
};

export default ProjectPlanCard;
