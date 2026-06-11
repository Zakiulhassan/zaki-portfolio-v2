import React from 'react';
import { IoAlertCircleSharp } from 'react-icons/io5';

interface AlertCardProps {
  message: string;
}

const AlertCard: React.FC<AlertCardProps> = ({ message }) => {
  return (
    <div className="w-full bg-coal-soft border border-line700 p-4 flex items-start space-x-4">
      <IoAlertCircleSharp className="w-6 h-6 text-red-500 flex-shrink-0" />
      <p className="text-md text-ink-dim">{message}</p>
    </div>
  );
};

export default AlertCard;
