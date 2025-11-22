"use client"
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { motion } from 'motion/react';

import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Button } from '../ui/button';
import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';

function SwipeDemo() {
  // States
  const [animateKey, setAnimateKey] = useState(0); // Key to trigger animation
  const [activeDotPosition, setActiveDotPosition] = useState(0);
  const SLIDE_COUNT = 5;
  // Refs
  const swiperRef = useRef<SwiperRef | null>(null);
  const dotsRefs = useRef<HTMLSpanElement[]>([]);

  return (
    <Swiper
      // install Swiper modules
      // modules={[Autoplay]}
      ref={swiperRef}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={(swiper) => {
        // Use realIndex for looped slides to get the correct position
        const realIndex = swiper.realIndex;
        setActiveDotPosition(dotsRefs.current[realIndex].offsetLeft);
        setAnimateKey(realIndex);
        console.log(realIndex, dotsRefs.current[realIndex].offsetLeft);
      }}
      loop={true}
    // autoplay={{ delay: 3000, disableOnInteraction: true }}
    >
      {Array.from({ length: SLIDE_COUNT }).map((_, index) => (
        <SwiperSlide
          key={index}
          className='flex justify-center items-center rounded-md w-full h-full'
        >
          <div className='flex lg:flex-row flex-col-reverse justify-center items-center gap-4 rounded-md w-full h-full'>
            <div className='flex flex-row lg:flex-col justify-center items-center gap-4 w-full lg:w-[21vw]'>
              <span className='flex justify-center items-center bg-custom-gray rounded-md w-[44%] lg:w-full h-24 lg:h-[21.7vh] aspect-5/4'>
                <h1 className='bg-gray-900/30 p-3 rounded-md text-3xl lg:text-7xl'>5:4</h1>
              </span>
              <span className='flex justify-center items-center bg-custom-gray rounded-md w-[44%] lg:w-full h-24 lg:h-[21.7vh] aspect-5/4'>
                <h1 className='bg-gray-900/30 p-3 rounded-md text-3xl lg:text-7xl'>5:4</h1>
              </span>
            </div>
            <div className='flex justify-center items-center bg-custom-gray rounded-md w-11/12 lg:w-[63vw] h-[158px] lg:h-[45vh] aspect-21/9'>
              <h1 className='bg-gray-900/30 p-3 rounded-md text-3xl lg:text-7xl'>21:9</h1>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className='flex justify-between items-center mt-9 w-full'>
        <span className='relative flex justify-between items-center w-6'>
          {/* Arrow Left */}
          <Button variant="outline" onClick={() => swiperRef.current?.swiper.slidePrev()} className='relative flex justify-center items-center bg-transparent hover:bg-transparent shadow-none ml-3 lg:ml-3 px-6 border-0 w-9 min-w-9 h-9 min-h-9 cursor-pointer'>
            <Image src="/vectors/Vector.svg" alt="Previous" width={24} height={24} className='z-1 absolute -ml-9 scale-110 pointer-events-none' />
            <span className='absolute bg-custom-light-blue rounded-full w-9 h-9 pointer-events-none'></span>
            <span className='z-1 absolute bg-custom-blue p-[1.25px] rounded-full w-1.5 pointer-events-none'></span>
          </Button>
          {/* Arrow Right */}
          <Button variant="outline" onClick={() => swiperRef.current?.swiper.slideNext()} className='relative flex justify-center items-center bg-transparent hover:bg-transparent shadow-none mr-2 px-6 border-0 w-9 min-w-9 h-9 min-h-9 cursor-pointer'>
            <Image src="/vectors/Vector.svg" alt="Next" width={24} height={24} className='z-1 absolute -mr-9 rotate-180 scale-110 pointer-events-none' />
            <span className='absolute bg-custom-light-blue rounded-full w-9 h-9 pointer-events-none'></span>
            <span className='z-1 absolute bg-custom-blue p-[1.25px] rounded-full w-1.5 pointer-events-none'></span>
          </Button>
        </span>
        {/* Dotes */}
        <span className='relative flex justify-center items-center gap-x-1.5 h-3 min-h-3'>
          {/* Transition indicator */}
          <motion.span
            key={animateKey}
            className={cn("top-1/2 z-12 absolute bg-custom-blue rounded-full w-2 h-2 transition-all -translate-y-1/2 duration-300 pointer-events-none", swiperRef.current?.swiper?.slideNext && "ease-in", swiperRef.current?.swiper?.slidePrev && "ease-out")}
            style={{ left: `${activeDotPosition}px` }}
            initial={{ width: '21px' }}
            animate={{ width: '8px' }}
            transition={{
              duration: 0.3,
              ease: "easeInOut"
            }}
          ></motion.span>
          {
            Array.from({ length: SLIDE_COUNT }, (_, index) => (
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
    </Swiper>
  );
};

export default SwipeDemo;
