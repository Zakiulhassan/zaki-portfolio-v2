"use client";

import React from 'react';
import classNames from 'classnames';

interface ButtonGhostProps {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const ButtonPrimary: React.FC<ButtonGhostProps> = ({ text, icon, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'relative px-4 py-2 flex items-center gap-2 rounded-lg font-chesnaMed text-[16px] text-white',
        'bg-gradient-to-b from-[#706CFB] to-[#3A36D3]', // Default gradient
        'transition-all duration-500 ease-in-out', // Apply a smooth transition to all properties
        'bg-[length:200%_200%] bg-left', // Set a larger background with starting position
        'hover:bg-right', // Shift background position on hover
        'group', // Add group class for nested element styling
        className
      )}
    >
      {/* Gradient border on hover */}
      <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-transparent group-hover:border-current" />
      
      {/* Button content */}
      <span className="relative z-10 font-bricolage font-medium text-white group-hover:font-semibold transition-all duration-300 ease-in-out">
        {text}
      </span>
      {icon && (
        <span className="relative z-10 flex-shrink-0 text-2xl text-white transition-transform duration-300 ease-in-out group-hover:scale-125">
          {icon}
        </span>
      )}
    </button>
  );
}

export default ButtonPrimary;
