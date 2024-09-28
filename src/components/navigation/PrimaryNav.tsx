

import Link from 'next/link'
import React, { useState } from 'react'
import Container from '../widgets/Container'
import { BiMoon, BiSun } from 'react-icons/bi';

const PrimaryNav = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
      document.documentElement.classList.toggle('dark');
      setDarkMode(!darkMode);
    };

  return (
    <section className='bg-primary py-1'>
        <Container>
      <div className='flex justify-between font-chesnaLight text-sm text-backgroundPri w-full'>
        <p className="hover:bg-secondary p-1 rounded-md">Good Morning!</p>
        <div className='flex gap-2'>
          <button onClick={toggleDarkMode} className="hover:bg-secondary p-1 rounded-md">
            {darkMode ? <BiSun size={18} /> : <BiMoon size={18} />}
          </button>
          <Link href={""} className='hover:bg-secondary p-[4px] rounded-md'>Help Center</Link>
          <Link href={""} className='hover:bg-secondary p-[4px] rounded-md'>Signup</Link>
        </div>
      </div>
        </Container>
    </section>
  )
}

export default PrimaryNav
