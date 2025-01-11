import React from 'react';
import { IoAlertCircleSharp } from 'react-icons/io5';

interface AlertCardProps {
  message: string;
}

const AlertCard: React.FC<AlertCardProps> = ({ message }) => {
  return (
    <div className="relative group overflow-hidden rounded-xl p-px">
      {/* Gradient border on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-50/50 via-red-400 to-red-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
      
      <div className="relative z-20 w-full bg-foreground rounded-xl shadow-sm p-4 flex items-start space-x-4">
        <IoAlertCircleSharp className="w-6 h-6 text-red-500 flex-shrink-0" />
        <p className="text-md text-secondary">{message}</p>
      </div>
      
      {/* Gradient shine effect */}
      <div className="absolute inset-0 z-10 group-hover:before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-red-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:blur-[100px]"></div>
    </div>
  );
};

export default AlertCard;
