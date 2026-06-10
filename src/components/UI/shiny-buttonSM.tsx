"use client";

import React from "react";

import { cn } from "@/lib/utils";

interface ShinyButtonSMProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Small solid signal-green button. Sharp corners, ease-out hover only —
 * no infinite shimmer/spring loop per the brand motion spec.
 */
const ShinyButtonSM = ({ children, className, ...props }: ShinyButtonSMProps) => {
  return (
    <button
      {...props}
      className={cn("btn btn-primary px-3 py-[6px] text-sm", className)}
    >
      {children}
    </button>
  );
};

export default ShinyButtonSM;
