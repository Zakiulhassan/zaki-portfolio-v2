"use client";

import React, { useState, useRef, useEffect } from "react";

interface Tab {
  label: string;
  content: string;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [sliderStyle, setSliderStyle] = useState({});
  const [isTransitioning, setIsTransitioning] = useState(false); // Track transition
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeTabElement = tabRefs.current[activeTab];
    if (activeTabElement) {
      setIsTransitioning(true); // Start the transition
      setSliderStyle({
        left: `${activeTabElement.offsetLeft}px`,
        width: `${activeTabElement.offsetWidth}px`,
        transition: "all 0.25s ease-in-out",
      });

      // Delay the text color change to sync with slider transition
      const timer = setTimeout(() => {
        setIsTransitioning(false); // End the transition after 300ms
      }, 300);

      return () => clearTimeout(timer); // Cleanup timeout on component unmount
    }
  }, [activeTab]);

  return (
    <div className="flex flex-col items-start">
      <div className="inline-flex border border-gray-400 rounded-xl bg-white p-2 relative">
        {tabs.map((tab, index) => (
          <button
            key={index}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            className={`py-1 px-2 text-sm font-jakarta font-regular z-10 relative ${
              index === activeTab && !isTransitioning
                ? "text-white font-semibold" // White text only after the transition
                : "text-secondary hover:text-primary" // Default color during transition
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
        <div
          className="absolute top-2 bottom-2 bg-gradient-to-r from-greenPri to-greenSec rounded-lg transition-all duration-300 ease-in-out"
          style={sliderStyle}
        />
      </div>

      <div className="mt-6">
        <p className="font-bricolage font-semibold text-[2.5rem] leading-tight bg-clip-text text-transparent bg-text-gradient">
          {tabs[activeTab].content}
        </p>
      </div>
    </div>
  );
};

export default Tabs;
