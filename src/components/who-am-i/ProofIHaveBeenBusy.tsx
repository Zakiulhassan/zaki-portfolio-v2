import React from 'react'
import EducationCardList from '../widgets/education/EducationCardList'
import { SplitReveal, FadeIn } from '../motion/SplitReveal'

const ProofIHaveBeenBusy = () => {
  return (
    <section className='flex flex-col items-center justify-center py-12 min-h-screen'>
        <div className='flex flex-col items-center justify-center w-full max-w-3xl px-2 text-center'>
            <SplitReveal as="h1" mode="words" className='text-display text-[8vw] sm:text-[5vw] lg:text-[3.5vw] leading-tight text-ink'>Proof I&apos;ve Been Busy Learning</SplitReveal>
            <FadeIn delay={0.2}><p className='text-base font-normal text-center leading-tight text-ink-dim mt-4'>Behind every great designer is a stack of certifications. Okay, maybe not a stack, but these are the ones that have helped me level up. Here&apos;s what I&apos;ve achieved so far.</p></FadeIn>
        </div>

        <div className='w-full max-w-2xl pt-8'><EducationCardList/></div>
    </section>
  )
}

export default ProofIHaveBeenBusy