"use client"
import React, { useEffect, useRef, useState } from 'react'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import Image from 'next/image'

type CarouselDemoProps = {
  slides?: number
}
// Default slide is 3
function CarouselDemo({ slides = 3 }: CarouselDemoProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  )
  // States
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const [activeDotPosition, setActiveDotPosition] = useState(0);
  const [animateKey, setAnimateKey] = useState(0); // Key to trigger animation
  const dotsRefs = useRef<HTMLSpanElement[]>([]);

  // 
  const slideCount = Math.max(1, slides)

  // Effects
  useEffect(() => {
    if (!api) {
      return
    }
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
      setAnimateKey(prev => prev + 1); // Trigger animation on slide change
    })
  }, [api])

  // Update the position of the active dot indicator when current changes
  useEffect(() => {
    if (dotsRefs.current[current - 1]) {
      const dotElement = dotsRefs.current[current - 1];
      const container = dotElement.parentElement;
      if (container) {
        const containerRect = container.getBoundingClientRect();
        const dotRect = dotElement.getBoundingClientRect();
        setActiveDotPosition(dotRect.left - containerRect.left);
      }
    }
  }, [current, count]);

  return (
    <div className='relative flex justify-center items-center pl-6 rounded-md w-full max-w-full select-none'>
      <Carousel className='rounded-md w-full max-w-full'
        setApi={setApi}
        // ! Active this one for auto transition
        // plugins={[plugin.current]}
        opts={{ loop: true }}>
        <CarouselContent className='w-full'>
          {Array.from({ length: slideCount }).map((_, index) => (
            <CarouselItem
              key={index}
              className='flex justify-center items-center rounded-md w-full h-full'
            >
              <div className='flex lg:flex-row flex-col-reverse justify-center items-center gap-4 lg:gap-0 ml-[30px] lg:ml-0 rounded-md w-full h-full'>
                <div className='flex flex-row lg:flex-col justify-center items-center gap-4 w-full lg:w-[21vw]'>
                  <span className='flex justify-center items-center bg-custom-gray rounded-md w-[44%] lg:w-11/12 h-24 lg:h-[21.7vh] aspect-5/4'>
                    <h1 className='bg-gray-900/30 p-3 rounded-md text-3xl lg:text-7xl'>5:4</h1>
                  </span>
                  <span className='flex justify-center items-center bg-custom-gray rounded-md w-[44%] lg:w-11/12 h-24 lg:h-[21.7vh] aspect-5/4'>
                    <h1 className='bg-gray-900/30 p-3 rounded-md text-3xl lg:text-7xl'>5:4</h1>
                  </span>
                </div>
                <div className='flex justify-center items-center bg-custom-gray rounded-md w-11/12 lg:w-[63vw] h-[158px] lg:h-[45vh] aspect-21/9'>
                  <h1 className='bg-gray-900/30 p-3 rounded-md text-3xl lg:text-7xl'>21:9</h1>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className='right-0 -bottom-18 left-0 absolute flex justify-between items-center px-4 lg:px-6 w-full'>
          <span className='relative flex justify-between items-center w-6'>
            {/* Arrow Left */}
            <Button variant="outline" onClick={() => api?.scrollPrev()} className='relative flex justify-center items-center bg-transparent hover:bg-transparent shadow-none ml-3 lg:ml-3 px-6 border-0 w-9 min-w-9 h-9 min-h-9 cursor-pointer'>
              <Image src="/vectors/Vector.svg" alt="Previous" width={24} height={24} className='z-1 absolute -ml-9 scale-110 pointer-events-none' />
              <span className='absolute bg-custom-light-blue rounded-full w-9 h-9 pointer-events-none'></span>
              <span className='z-1 absolute bg-custom-blue p-[1.25px] rounded-full w-1.5 pointer-events-none'></span>
            </Button>
            {/* Arrow Right */}
            <Button variant="outline" onClick={() => api?.scrollNext()} className='relative flex justify-center items-center bg-transparent hover:bg-transparent shadow-none mr-2 px-6 border-0 w-9 min-w-9 h-9 min-h-9 cursor-pointer'>
              <Image src="/vectors/Vector.svg" alt="Next" width={24} height={24} className='z-1 absolute -mr-9 rotate-180 scale-110 pointer-events-none' />
              <span className='absolute bg-custom-light-blue rounded-full w-9 h-9 pointer-events-none'></span>
              <span className='z-1 absolute bg-custom-blue p-[1.25px] rounded-full w-1.5 pointer-events-none'></span>
            </Button>
          </span>
          {/* Dotes */}
          <span className='relative flex justify-center items-center gap-x-1.5 mr-9 lg:mr-9 h-3 min-h-3'>
            {/* Transition indicator */}
            <motion.span
              key={animateKey}
              className={cn("top-1/2 z-12 absolute bg-custom-blue rounded-full w-2 h-2 transition-all -translate-y-1/2 duration-300 pointer-events-none", api?.scrollNext && "ease-in", api?.scrollPrev && "ease-out")}
              style={{ left: `${activeDotPosition}px` }}
              initial={{ width: '21px' }}
              animate={{ width: '8px' }}
              transition={{
                duration: 0.3,
                ease: "easeInOut"
              }}
            ></motion.span>
            {
              Array.from({ length: count }, (_, index) => (
                <span
                  key={index}
                  ref={(el) => {
                    if (el) dotsRefs.current[index] = el;
                  }}
                  className={cn(
                    'z-10 relative bg-custom-light-blue border-custom-border-gray rounded-full size-2'
                  )}
                ></span>
              ))
            }
          </span>
        </div>
      </Carousel>
    </div>
  )
}

export default CarouselDemo