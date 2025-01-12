import React from 'react'
import EducationCardList from '../widgets/education/EducationCardList'

const ProofIHaveBeenBusy = () => {
  return (
    <section className='flex flex-col items-center justify-center py-12 min-h-screen'>
        <div className='flex flex-col items-center justify-center w-full max-w-3xl px-2'>
            <h1 className='font-gloria text-2xl text-muted-dark leading-relaxed tracking-tight '>Proof I&apos;ve Been Busy Learning</h1>
            <p className='text-base font-normal text-center leading-tight text-white mt-1'>Behind every great designer is a stack of certifications. Okay, maybe not a stack, but these are the ones that have helped me level up. Here&apos;s what I&apos;ve achieved so far.</p>
        </div>

        <div className='w-full max-w-2xl pt-8'><EducationCardList/></div>
    </section>
  )
}

export default ProofIHaveBeenBusy