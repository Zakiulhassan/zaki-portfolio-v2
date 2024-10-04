"use client";

import React, { useRef, useEffect, useState, useCallback } from 'react';
import MousePosition from '@/utils/mouse-position';
import ExperienceCard from './ExperienceCard';

const SuccessCardList: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = MousePosition();
  const mouse = useRef({ x: 0, y: 0 });
  const containerSize = useRef({ w: 0, h: 0 });
  const [cards, setCards] = useState<HTMLElement[]>([]);

  const jobExperiences = [
    {
      role: "Full Stack Developer & Designer",
      company: "Techanzy Limited",
      yearRange: "2024 - Present"
    },
    {
      role: "Freelance Designer & Developer",
      company: "Remote Freelancer",
      yearRange: "2018 - Present"
    },
    {
      role: "Graphics & UI/UX Designer",
      company: "Pixelpk Technologies",
      yearRange: "2022 - 2024"
    },
    {
      role: "Packaging Designer",
      company: "Biotech Packages Pvt Ltd.",
      yearRange: "2021 - 2022"
    },
    {
      role: "Graphic Designer",
      company: "Star Printing",
      yearRange: "2019 - 2021"
    }
  ];
  

  useEffect(() => {
    if (containerRef.current) {
      setCards(Array.from(containerRef.current.children) as HTMLElement[]);
    }
  }, []);

  const initContainer = useCallback(() => {
    if(containerRef.current) {
      containerSize.current.w = containerRef.current.offsetWidth;
      containerSize.current.h = containerRef.current.offsetHeight;
    }
  }, []);

  useEffect(() => {
    initContainer();
    window.addEventListener('resize', initContainer);
    return () => {
      window.removeEventListener('resize', initContainer);
    }
  }, [initContainer]);

  const onMouseMove = useCallback(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const { w, h } = containerSize.current;
      const x = mousePosition.x - rect.left;
      const y = mousePosition.y - rect.top;
      const inside = x < w && x > 0 && y < h && y > 0;
      
      if (inside) {
        mouse.current.x = x;
        mouse.current.y = y;
        cards.forEach((card) => {
          const cardRect = card.getBoundingClientRect();
          const cardX = -(cardRect.left - rect.left) + mouse.current.x;
          const cardY = -(cardRect.top - rect.top) + mouse.current.y;
          card.style.setProperty('--mouse-x', `${cardX}px`);
          card.style.setProperty('--mouse-y', `${cardY}px`);
        });
      }
    }
  }, [mousePosition, cards]);

  useEffect(() => {
    onMouseMove();
  }, [onMouseMove]);

  return (
    <div ref={containerRef} className="space-y-4">
      {jobExperiences.map(({role, company, yearRange}, index) => (
        <div key={index} className="group">
          <ExperienceCard 
            role={role}
            company={company}
            yearRange={yearRange}
          />
        </div>
      ))}
    </div>
  );
};

export default SuccessCardList;
