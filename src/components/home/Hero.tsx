import React from 'react'
import ShinnyTextComp from '../widgets/ShinnyTextComp'
import ShinyButton from '../UI/shiny-button'

const Hero = () => {
  return (
    <section>
      <div className='flex flex-col gap-4 items-center'>
        <div className='flex justify-center w-full'>
          <ShinnyTextComp />
        </div>
        <div className='flex flex-col gap-2 items-center'>
          <h1 className='text-5xl font-semibold text-primary w-full max-w-3xl text-center tracking-tight'>
            Crafting Seamless{' '}
            <span className='text-greenPri'>User Experiences</span> That Drive
            Results
          </h1>
          <p className='font-jakarta text-secondary text-lg'>I design products that drive growth and build loyalty.</p>
        </div>
        <div><ShinyButton className='outline-gray-400 outline-2 text-xl'>Get Started Now</ShinyButton></div>
      </div>
    </section>
  )
}

export default Hero
