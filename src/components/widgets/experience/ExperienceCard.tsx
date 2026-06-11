import React from 'react';
import { TbBadgeFilled } from 'react-icons/tb';

interface ExperienceCardProps {
  role: string;
  company: string;
  yearRange: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ role, company, yearRange }) => {
  return (
    <div className="w-full bg-coal-soft border border-line700 hover:border-acid transition-colors duration-base ease-brand p-4 flex items-start justify-between">
      <div className='flex gap-3'>
        <TbBadgeFilled className="w-5 h-5 text-acid flex-shrink-0 mt-1" />
        <div className='flex flex-col items-start gap-1'>
          <h1 className="text-lg md:text-xl text-ink leading-tight font-semibold tracking-heading">{role}</h1>
          <p className="font-mono uppercase tracking-label text-[11.5px] text-ink-dim">{company}</p>
        </div>
      </div>
      <p className="font-mono uppercase tracking-label text-[11.5px] text-ink-dim text-right whitespace-nowrap">{yearRange}</p>
    </div>
  );
};

export default ExperienceCard;
