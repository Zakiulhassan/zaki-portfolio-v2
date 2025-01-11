import React from "react";

const NoiseOverlay = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ mixBlendMode: "multiply", opacity: 0.25 }}
    >
      <svg 
        viewBox="0 0 400 400" 
        xmlns="http://www.w3.org/2000/svg"
        className="animate-noise"
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="8"
            numOctaves="3"
            stitchTiles="stitch"
          >
            <animate
              attributeName="baseFrequency"
              from="15"
              to="20"
              dur="20s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="seed"
              from="0"
              to="100"
              dur="15s"
              repeatCount="indefinite"
            />
          </feTurbulence>
        </filter>
        <rect 
          width="100%" 
          height="100%" 
          filter="url(#noiseFilter)"
        />
      </svg>
    </div>
  );
};

export default NoiseOverlay;