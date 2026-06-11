import React from 'react'
import EducationCardList from '../widgets/education/EducationCardList'
import { FadeIn } from '../motion/SplitReveal'
import RevealTick from '../motion/RevealTick'

const ProofIHaveBeenBusy = () => {
  return (
    <section className='flex flex-col items-center justify-center py-12 min-h-screen'>
        <div className='flex flex-col items-center justify-center w-full max-w-3xl px-2 text-center'>
            <div className="rail justify-center"><span className="idx">02</span><h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-heading leading-tight text-ink">Proof I&apos;ve Been Learning</h1><RevealTick /></div>
            <FadeIn delay={0.2}><p className='text-base font-normal text-center leading-tight text-ink-dim mt-4'>A short list of certifications that have shaped how I design and build — proof, not decoration.</p></FadeIn>
        </div>

        <div className='w-full max-w-2xl pt-8'><EducationCardList/></div>
    </section>
  )
}

export default ProofIHaveBeenBusy