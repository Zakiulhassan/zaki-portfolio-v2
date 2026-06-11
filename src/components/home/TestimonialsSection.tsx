import React from 'react'
import Container from '../widgets/Container'
import { Testimonials } from '../widgets/Testimonials'
import RevealTick from '../motion/RevealTick'

const TestimonialsSection = () => {
  return (
    <section className='bg-coal min-h-screen lg:px-12 py-28'>
        <Container>
            <div className='mb-6'>
                <div className="rail">
                    <span className="idx">05</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-heading leading-tight">
                        What it&apos;s like to <span className="text-acid">work</span> with me
                    </h2>
                    <RevealTick />
                </div>
                <p className='text-base leading-tight text-ink-dim mt-4'>From the people who briefed me, reviewed the work, and shipped it.</p>
            </div>
        <Testimonials/>
        </Container>
    </section>
  )
}

export default TestimonialsSection