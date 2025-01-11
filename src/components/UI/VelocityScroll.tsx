"use client";

import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';
import Image from 'next/image';

// Fixing the implicit any type issues by specifying types
const wrap = (min: number, max: number, v: number): number => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface LogoRowProps {
  logos: string[];
  baseVelocity?: number;
}

const LogoRow: React.FC<LogoRowProps> = ({ logos, baseVelocity = 5 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const [repetitions, setRepetitions] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateRepetitions = () => {
      if (containerRef.current && rowRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const rowWidth = rowRef.current.offsetWidth;
        const newRepetitions = Math.ceil(containerWidth / rowWidth) + 1;
        setRepetitions(newRepetitions);
      }
    };
    calculateRepetitions();
    window.addEventListener('resize', calculateRepetitions);
    return () => window.removeEventListener('resize', calculateRepetitions);
  }, [logos]);

  const x = useTransform(baseX, (v) => `${wrap(-100, 0, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="relative overflow-hidden whitespace-nowrap" ref={containerRef}>
      <motion.div className="inline-block" style={{ x }}>
        {Array.from({ length: repetitions }).map((_, i) => (
          <div key={i} className="inline-flex" ref={i === 0 ? rowRef : null}>
            {logos.map((logo, index) => (
              <div key={index} className="mx-8 flex items-center justify-center">
                <Image src={logo} alt={`Logo ${index}`} width={40} height={40} />
              </div>
            ))}
          </div>
        ))}
      </motion.div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background dark:from-background"></div>
    </div>
  );
};

export const LogoScrollVelocity = () => {
  const logos1 = [
    "/tech/1/html5.png",
    "/tech/1/css3.png",
    "/tech/1/js.png",
    "/tech/1/sass.png",
    "/tech/1/figma.png",
    "/tech/1/ai.png",
    "/tech/1/ps.png",
    "/tech/1/miro.png",
    "/tech/1/github.png",
  ];
  const logos2 = [
    "/tech/2/reactjs.png",
    "/tech/2/nextjs2.png",
    "/tech/2/typescript.png",
    "/tech/2/nodejs.png",
    "/tech/2/python.png",
    "/tech/2/django.png",
    "/tech/2/graphql.png",
    // "/tech/2/mongodb.png",
    "/tech/2/postgresql.png",
    "/tech/2/docker.png",
  ];

  return (
    <div className="flex flex-col gap-8 w-full">
      <LogoRow logos={logos1} baseVelocity={1.5} /> {/* Normal speed */}
      <LogoRow logos={logos2} baseVelocity={-1.5} /> {/* Different speed */}
    </div>
  );
};
