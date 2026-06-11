import React from 'react'
import ExperienceCardList from '../widgets/experience/ExperienceCardList'
import { FadeIn } from '../motion/SplitReveal'

const WhereWasIBefore = () => {
  return (
    <section className='flex flex-col items-center justify-center py-12 min-h-screen'>
        <div className='flex flex-col items-center justify-center w-full max-w-3xl px-2 text-center'>
            <div className="rail justify-center"><span className="idx">01</span><h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-heading leading-tight text-ink">Where I&apos;ve Worked</h1></div>
            <FadeIn delay={0.2}><p className='text-base font-normal text-center leading-tight text-ink-dim mt-4'>A brief look at my career journey — design milestones, shipped products, and the problems solved along the way.</p></FadeIn>
        </div>

        <div className='w-full max-w-2xl pt-8'><ExperienceCardList/></div>
    </section>
  )
}

export default WhereWasIBefore