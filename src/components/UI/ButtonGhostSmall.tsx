"use client";

import React from 'react';
import classNames from 'classnames';

interface ButtonGhostProps {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const ButtonGhostSmall: React.FC<ButtonGhostProps> = ({ text, icon, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'relative bg-[#F5F8FF] px-2 py-1 flex items-center gap-2 rounded-lg font-chesnaMed text-sm',
        'transition-all duration-300 ease-in-out',
        'border border-darksec hover:border-primary',
        'group', // Add group class for nested element styling
        className
      )}
    >
      {/* Gradient border on hover */}
      <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Button content */}
      <span className="relative z-10 text-darksec group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#706CFB] group-hover:to-[#3A36D3] transition-all duration-300 ease-in-out group-hover:font-chesnaMed">
        {text}
      </span>
      {icon && (
        <span className="relative z-10 flex-shrink-0 text-2xl text-darksec group-hover:text-primary transition-transform duration-300 ease-in-out group-hover:scale-125">
          {icon}
        </span>
      )}
    </button>
  );
}

export default ButtonGhostSmall;
