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
    <div className="flex flex-col items-center md:items-start ">
      <div className="inline-flex border border-line700 p-1 relative">
        {tabs.map((tab, index) => (
          <button
            key={index}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            className={`py-1.5 px-3 font-mono uppercase tracking-label text-[11.5px] z-10 relative transition-colors duration-base ease-brand ${
              index === activeTab && !isTransitioning
                ? "text-coal" // dark text on signal fill once active
                : "text-ink-dim hover:text-ink"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
        <div
          className="absolute top-1 bottom-1 bg-acid"
          style={sliderStyle}
        />
      </div>

      <div className="mt-6">
        <p className="font-normal text-xl text-center md:text-start md:text-2xl lg:text-3xl leading-normal md:leading-tight lg:leading-normal text-ink">
          {tabs[activeTab].content}
        </p>
      </div>
    </div>
  );
};

export default Tabs;
