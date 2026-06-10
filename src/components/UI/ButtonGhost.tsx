"use client";

import React from "react";
import { useRouter } from "next/navigation";
import classNames from "classnames";

interface ButtonGhostProps {
  text: string;
  icon?: React.ReactNode;
  href?: string; // New prop for navigation
  onClick?: () => void;
  className?: string;
}

const ButtonGhost: React.FC<ButtonGhostProps> = ({
  text,
  icon,
  href,
  onClick,
  className,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick(); // Trigger the passed onClick function
    }
    if (href) {
      router.push(href); // Redirect to the href page
    }
  };

  return (
    <button
      onClick={handleClick}
      data-cursor="hover"
      className={classNames("btn btn-secondary group", className)}
    >
      {/* Button text */}
      <span className="flex-grow">{text}</span>

      {/* Icon (if provided) */}
      {icon && (
        <span className="flex-shrink-0 text-xl transition-transform duration-base ease-brand group-hover:translate-x-1 group-hover:-translate-y-1">
          {icon}
        </span>
      )}
    </button>
  );
};

export default ButtonGhost;
