"use client";

import React from "react";

import { cn } from "@/lib/utils";

interface ShinyButtonProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Solid signal-green primary button. Sharp corners, ease-out hover only —
 * no infinite shimmer/spring loop per the brand motion spec.
 */
const ShinyButton = ({ children, className, ...props }: ShinyButtonProps) => {
  return (
    <button {...props} className={cn("btn btn-primary", className)}>
      {children}
    </button>
  );
};

export default ShinyButton;
