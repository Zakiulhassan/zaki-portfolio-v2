"use client";

import React, { useState, useRef, useEffect } from 'react';

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
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeTabElement = tabRefs.current[activeTab];
    if (activeTabElement) {
      setSliderStyle({
        left: `${activeTabElement.offsetLeft}px`,
        width: `${activeTabElement.offsetWidth}px`,
        transition: 'all 0.3s ease-in-out',
      });
    }
  }, [activeTab]);

  return (
    <div>
      <div className="flex border border-gray-400 rounded-xl bg-white p-2 relative">
        {tabs.map((tab, index) => (
          <button
            key={index}
            ref={(el) => { tabRefs.current[index] = el; }}
            className={`py-1 px-2 text-base font-jakarta font-regular z-10 relative ${
              index === activeTab
                ? 'text-white font-medium'
                : 'text-secondary hover:text-primary'
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
      <div className="p-4">
        <p className="text-primary font-bricolage font-semibold text-4xl leading-tight max-w-xl">{tabs[activeTab].content}</p>
      </div>
    </div>
  );
};

export default Tabs;