import React from 'react';
import { Clock} from 'lucide-react';
import { BorderBeam } from '../UI/border-beam';
import { FaCircle } from 'react-icons/fa';

interface ProjectPlanCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  durationText: string;
  listItems: string[];
  colorHeading?: string;
  colorText?: string;
  btnColorFrom?: string;
  btnColorTo?: string;
  bgColorFrom?: string;  // Allow optional background color
  bgColorTo?: string;  // Allow optional background color
  beamColorFrom?: string; // Allow customization for beam gradient color
  beamColorTo?: string;
}

const ProjectPlanCard: React.FC<ProjectPlanCardProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  durationText,
  listItems,
  colorHeading,
  colorText,
  btnColorFrom,
  btnColorTo,
  bgColorFrom = "#242524",  // Default background color is white
  bgColorTo = "#242524",  // Default background color is white
  beamColorFrom = "#00FF00", // Default border beam colors
  beamColorTo = "#00FFFF",
}) => {
  return (
    <section className="relative flex flex-wrap items-center justify-center">
      <div className={`relative max-w-full rounded border border-line700 overflow-hidden `} style={{
          background: `linear-gradient(to right, ${bgColorFrom}, ${bgColorTo})`,
        }}>
        <div className="p-8">
          <h2 className={` text-xl font-bricolage font-bold mb-2 leading-tight`} style={{
          color: `${colorHeading}`,
        }}>{title}</h2>
          <p className="text-sm mb-8 font-jakarta leading-tight" style={{
          color: `${colorText}`,
        }}>{description}</p>
          <a
            href={buttonLink}
            className="btn btn-primary text-base font-bricolage uppercase" style={{
              background: `linear-gradient(to right, ${btnColorFrom}, ${btnColorTo})`,
            }}
          >
            {buttonText}
          </a>
          <div className="flex items-center mt-4 text-sm text-white font-jakarta">
            <div className='flex bg-coal-soft px-[12px] py-[6px] rounded items-center'>
                <Clock className="w-4 h-4 mr-1" />
                <span>{durationText}</span>
            </div>
          </div>
          <ul className="mt-4 space-y-1 text-muted">
            {listItems.map((item, index) => (
              <li key={index} className="flex items-center text-base text-secondary font-jakarta" style={{
                color: `${colorHeading}`,
              }}>
                <FaCircle className="w-2 h-2 mr-2 mb-[1px]" style={{
                color: `${colorText}`,
              }}/>
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* BorderBeam component with customizable colors */}
        <BorderBeam size={300} duration={12} delay={3} colorFrom={beamColorFrom} colorTo={beamColorTo} />
      </div>
    </section>
  );
};

export default ProjectPlanCard;
