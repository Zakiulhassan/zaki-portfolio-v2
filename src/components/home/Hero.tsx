import React from 'react'
import ShinnyTextComp from '../widgets/ShinnyTextComp'
import ShinyButton from '../UI/shiny-button'
import LogoMarquee from '../widgets/LogoMarquee'
import ProjectsHome from './ProjectsHome'

const Hero = () => {
  return (
    <section className='min-h-screen h-full w-screen flex flex-col gap-16'>
      <div className='flex flex-col gap-4 items-center mt-16'>
        <div className='flex justify-center w-full'>
          <ShinnyTextComp />
        </div>
        <div className='flex flex-col gap-2 items-center'>
          <h1 className='text-5xl font-bricolage font-bold text-primary w-full max-w-3xl text-center tracking-tight'>
            Crafting Seamless{' '}
            <span className='text-greenPri'>User Experiences</span> That Drive
            Results
          </h1>
          <p className='font-jakarta text-secondary text-lg'>I design products that drive growth and build loyalty.</p>
        </div>
        <div><ShinyButton className='outline-gray-400 outline-2 text-xl'>Get Started Now</ShinyButton></div>

        <div className='w-full flex flex-col gap-2 items-center mt-8'>
          <h1 className='font-gloria text-base text-darkpri'>trusted by brands like:</h1>
          <LogoMarquee/>
        </div>
      </div>
      <ProjectsHome/>
    </section>
  )
}

export default Hero
