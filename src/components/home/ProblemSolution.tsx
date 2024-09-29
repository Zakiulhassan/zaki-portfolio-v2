"use client";

import React, { useEffect, useState } from 'react';
import Container from '../widgets/Container';
import Image from 'next/image';
import WordPullUp from '../UI/word-pull-up';
import WordFadeIn from '../UI/word-fade-in';
import { FadeTextComp } from '../widgets/FadeText';

const ProblemSolution = () => {
  // State to control the visibility of the image
  const [showImage, setShowImage] = useState(false);

  // Effect to set the image visibility after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true); // Show the image after 1 second
    }, 1000); // 1000 ms delay (1 second)

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  return (
    <section>
      <Container>
        <div className='flex justify-between gap-16'>
          <div className='flex flex-col gap-4 w-full max-w-md h-full'>
            <WordPullUp className="font-jakarta text-secondary text-lg" words="Is this you right now?" />
            <WordFadeIn words="Your brand needs more than just an update—it needs a transformation that drives results." />

            {/* Show the image only when showImage is true */}
            {showImage && (
              <div className='w-full flex items-center justify-center'>
                <Image src="/arrow-1.png" alt='Arrow' width={36} height={36} />
              </div>
            )}

            <div className='max-w-[380px] items-center rotate-[-10deg]'>
              <FadeTextComp />
            </div>
          </div>
          <div className='flex flex-col gap-4 w-full h-full'>
            <div className='bg-slate-400'>p</div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProblemSolution;
