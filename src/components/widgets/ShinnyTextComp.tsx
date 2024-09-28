import React from 'react'
import AnimatedShinyText from '../UI/animated-shiny-text'
import { HiMiniArrowLongRight } from 'react-icons/hi2'
import { cn } from "@/lib/utils";

const ShinnyTextComp = () => {
  return (
    <div
      className={cn(
        "group inline-block rounded-full border border-black/5 bg-white text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-100 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
      )}
    >
      <AnimatedShinyText className="inline-flex items-center justify-center gap-1 px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
        <span>👋</span>
        <HiMiniArrowLongRight className="ml-1 size-5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 text-greenPri" />
        <span className='ml-1'>Design</span>
        <HiMiniArrowLongRight className="ml-1 size-5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 text-greenPri" />
        <span className='ml-1'>Development</span>
        <HiMiniArrowLongRight className="ml-1 size-5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 text-greenPri" />
        <span className='ml-1'>🚀</span>
      </AnimatedShinyText>
    </div>
  )
}

export default ShinnyTextComp