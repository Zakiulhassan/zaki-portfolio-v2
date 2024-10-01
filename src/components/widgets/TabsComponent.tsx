"use client";

import React, { useState } from 'react';

interface Tab {
  label: string;
  content: string;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex border border-gray-400 rounded-xl bg-white p-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 text-base font-jakarta font-medium ${
              index === activeTab
                ? 'text-white border-green-600 bg-gradient-to-r from-greenPri to-greenSec rounded-lg font-semibold'
                : 'text-secondary hover:text-primary'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">
        <p className="text-primary font-bricolage font-semibold text-2xl">{tabs[activeTab].content}</p>
      </div>
    </div>
  );
};

export default Tabs;

// Usage example:
