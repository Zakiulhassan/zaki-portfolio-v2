import React from 'react';
import { BiSolidBadge } from 'react-icons/bi';

interface EducationCardProps {
  role: string;
  company: string;
  yearRange: string;
}

const EducationCardList: React.FC<EducationCardProps> = ({ role, company, yearRange }) => {
  return (
    <div className="w-full bg-coal-soft border border-line700 hover:border-acid transition-colors duration-base ease-brand p-4 flex items-start justify-between">
      <div className='flex gap-3'>
        <BiSolidBadge className="w-5 h-5 text-acid flex-shrink-0 mt-1"/>

        <div className='flex flex-col items-start'>
          <h1 className="text-lg text-ink leading-tight font-bold tracking-heading">{role}</h1>
          <p className="font-mono uppercase tracking-label text-[11.5px] text-ink-dim mt-1">{company}</p>
        </div>
      </div>
      <p className="font-mono uppercase tracking-label text-[11.5px] text-ink-dim text-right whitespace-nowrap">{yearRange}</p>
    </div>
  );
};

export default EducationCardList;
