import React from 'react';
import { TbBadgeFilled } from 'react-icons/tb';

interface AlertCardProps {
  message: string;
}

const SuccessCard: React.FC<AlertCardProps> = ({ message }) => {
  return (
    <div className="w-full bg-coal-soft border border-line700 p-4 flex items-start space-x-4">
      <TbBadgeFilled className="w-6 h-6 text-acid flex-shrink-0" />
      <p className="text-md text-ink-dim">{message}</p>
    </div>
  );
};

export default SuccessCard;
