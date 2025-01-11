import React from 'react'
import ExperienceCardList from '../widgets/experience/ExperienceCardList'

const WhereWasIBefore = () => {
  return (
    <section className='flex flex-col items-center justify-center py-12'>
        <div className='flex flex-col items-center justify-center w-full max-w-3xl px-2'>
            <h1 className='font-gloria text-2xl text-muted-dark leading-relaxed tracking-tight'>Where Was I Before You Discovered Me?</h1>
            <p className='text-lg font-normal text-center font-jakarta leading-tight text-white'>Here&apos;s a brief look at my career journey—filled with design milestones and problem-solving adventures. I&apos;ve been preparing for this moment!</p>
        </div>

        <div className='w-full max-w-2xl pt-8'><ExperienceCardList/></div>
    </section>
  )
}

export default WhereWasIBefore