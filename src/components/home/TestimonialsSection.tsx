import React from 'react'
import Container from '../widgets/Container'
import { Testimonials } from '../widgets/Testimonials'
import RevealTick from '../motion/RevealTick'

const TestimonialsSection = () => {
  return (
    <section className='border-t border-line700 bg-coal'>
        <Container>
            <div className='flex flex-col gap-12 py-24 sm:py-32'>
                <div className='flex flex-col justify-between gap-6 md:flex-row md:items-end'>
                    <div className="rail">
                        <span className="idx">05</span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-heading leading-tight">
                            What it&apos;s like to <span className="text-acid">work</span> with me
                        </h2>
                        <RevealTick />
                    </div>
                    <p className='max-w-md text-base text-ink-dim sm:text-lg md:text-right'>
                        From the people who briefed me, reviewed the work, and shipped it.
                    </p>
                </div>
                <Testimonials/>
            </div>
        </Container>
    </section>
  )
}

export default TestimonialsSection
