import React from 'react';
import { TbBadgeFilled } from 'react-icons/tb';

interface AlertCardProps {
  message: string;
}

const SuccessCard: React.FC<AlertCardProps> = ({ message }) => {
  return (
    <div className="relative group overflow-hidden rounded-xl p-px">
      {/* Gradient border on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-50/50 via-green-400 to-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
      
      <div className="relative z-20 w-full bg-foreground rounded-xl shadow-sm p-4 flex items-start space-x-4">
        <TbBadgeFilled className="w-6 h-6 text-green-500 flex-shrink-0" />
        <p className="text-md text-secondary">{message}</p>
      </div>
      
      {/* Gradient shine effect */}
      <div className="absolute inset-0 z-10 group-hover:before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-green-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:blur-[100px]"></div>
    </div>
  );
};

export default SuccessCard;
