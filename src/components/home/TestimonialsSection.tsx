import React from 'react'
import Container from '../widgets/Container'
import { Testimonials } from '../widgets/Testimonials'

const TestimonialsSection = () => {
  return (
    <section>
        <Container>
            <div className='mb-6'>
                <h1 className='text-3xl text-center font-bricolage font-bold leading-tight'>Testimonial from peers & coworkers</h1>
                <p className='text-base text-center font-jakarta leading-tight text-secondary'>A few kind words people have to say about collaborating and solving problems with me.</p>
            </div>
        </Container>
        <Testimonials/>
    </section>
  )
}

export default TestimonialsSection