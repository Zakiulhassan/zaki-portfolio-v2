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
      className={classNames(
        "relative flex items-center gap-2 rounded-sm px-3 py-[4px] uppercase tracking-tight text-base font-normal shadow-sm backdrop-blur-xl transition-shadow duration-300 ease-in-out bg-primary hover:bg-primary-foreground text-white hover:shadow-lg",
        className
      )}
    >
      {/* Button text */}
      <span className="flex-grow">{text}</span>

      {/* Icon (if provided) */}
      {icon && (
        <span className="text-xl flex-shrink-0 transition-transform duration-300 ease-in-out text-greenPri">
          {icon}
        </span>
      )}
    </button>
  );
};

export default ButtonGhost;
