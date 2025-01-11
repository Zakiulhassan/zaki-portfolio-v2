import React from 'react'
import { HiMiniArrowLongRight } from 'react-icons/hi2'
import { cn } from "@/lib/utils";
import AnimatedShinyTextDark from '../UI/animated-shiny-textDark';
import { RxArrowRight } from 'react-icons/rx';

const ShinnyTextCompDark = () => {
  return (
    <div
      className={cn(
        "group inline-block rounded-md border border-greenPri bg-foreground text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-background"
      )}
    >
      <AnimatedShinyTextDark className="inline-flex items-center justify-center px-2 py-1 transition ease-out hover:text-neutral-600 hover:duration-300">
        <span>👋</span>
        <RxArrowRight  className="ml-1 size-5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 text-greenPri text-sm" />
        <span className='ml-1'>Design</span>
        <RxArrowRight  className="ml-1 size-5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 text-greenPri" />
        <span className='ml-1'>Development</span>
        <RxArrowRight  className="ml-1 size-5 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 text-greenPri" />
        <span className='ml-1'>🚀</span>
      </AnimatedShinyTextDark>
    </div>
  )
}

export default ShinnyTextCompDark