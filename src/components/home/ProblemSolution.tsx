"use client";

import React, { useEffect, useState, useRef } from 'react';
import Container from '../widgets/Container';
import Image from 'next/image';
import WordPullUp from '../UI/word-pull-up';
import WordFadeIn from '../UI/word-fade-in';
import { FadeTextComp } from '../widgets/FadeText';
import CardList from '../widgets/CardList';
import SuccessCardList from '../widgets/SuccessCardList';

const ProblemSolution = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Intersection Observer to detect when the component is in the viewport
  useEffect(() => {
    const currentRef = sectionRef.current; // Copy the ref to a local variable

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger the animation when the component is visible
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the component is visible
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the local variable in cleanup
      }
    };
  }, []);

  // Delay for image reveal
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowImage(true); // Show the image after a delay when component is visible
      }, 2000); // 1000 ms delay (1 second)

      return () => clearTimeout(timer); // Cleanup timer on unmount or state change
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef}>
      <Container>
        <div className="flex md:flex-row flex-col justify-between gap-16">
          <div className="flex flex-col gap-4 w-full max-w-md h-full">
            {/* Apply animation only when the component is visible */}
            {isVisible && (
              <>
                <WordPullUp
                  className="font-jakarta text-secondary text-lg"
                  words="Is this you right now?"
                />
                <WordFadeIn
                  words="Your brand needs more than just an update—it needs a transformation that drives results."
                />
                
                {/* Delayed image reveal */}
                {showImage && (
                  <div className="w-full flex items-center justify-center">
                    <Image src="/arrow-1.png" alt="Arrow" width={36} height={36} />
                  </div>
                )}

                <div className="max-w-[380px] items-center rotate-[-10deg]">
                  <FadeTextComp />
                </div>
              </>
            )}
          </div>
          <div className="flex flex-col gap-12 w-full h-full">
            <div className='flex flex-col gap-4'>
              <h3 className='font-gloria text-2xl text-primary leading-tight tracking-tight'>Your Problem</h3>
              <CardList />
            </div>
            <div className='flex flex-col gap-4'>
              <h3 className='font-gloria text-2xl text-primary leading-tight tracking-tight'>Your Solution</h3>
              <SuccessCardList />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProblemSolution;
