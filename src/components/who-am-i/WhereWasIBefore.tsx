import React from 'react'
import ExperienceCardList from '../widgets/experience/ExperienceCardList'
import { SplitReveal, FadeIn } from '../motion/SplitReveal'

const WhereWasIBefore = () => {
  return (
    <section className='flex flex-col items-center justify-center py-12 min-h-screen'>
        <div className='flex flex-col items-center justify-center w-full max-w-3xl px-2 text-center'>
            <SplitReveal as="h1" mode="words" className='text-display text-[8vw] sm:text-[5vw] lg:text-[3.5vw] leading-tight text-ink'>Where Was I Before You Discovered Me?</SplitReveal>
            <FadeIn delay={0.2}><p className='text-base font-normal text-center font-jakarta leading-tight text-ink-dim mt-4'>Here&apos;s a brief look at my career journey—filled with design milestones and problem-solving adventures. I&apos;ve been preparing for this moment!</p></FadeIn>
        </div>

        <div className='w-full max-w-2xl pt-8'><ExperienceCardList/></div>
    </section>
  )
}

export default WhereWasIBefore