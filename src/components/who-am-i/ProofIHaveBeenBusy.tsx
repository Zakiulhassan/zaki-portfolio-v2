import React from 'react'
import EducationCardList from '../widgets/education/EducationCardList'

const ProofIHaveBeenBusy = () => {
  return (
    <section>
        <div className='flex flex-col items-center justify-center w-full max-w-2xl px-2'>
            <h1 className='font-gloria text-2xl text-primary leading-relaxed tracking-tight'>Proof I&apos; ve Been Busy Learning</h1>
            <p className='text-lg font-medium text-center font-jakarta leading-tight text-primary'>Here&apos;s a brief look at my career journey—filled with design milestones and problem-solving adventures. I&apos;ve been preparing for this moment!</p>
        </div>

        <div className='w-full max-w-2xl pt-8'><EducationCardList/></div>
    </section>
  )
}

export default ProofIHaveBeenBusy