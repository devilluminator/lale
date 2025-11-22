"use client"
import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import DB from "@/DB.json";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Button } from '../ui/button';


type Service = {
  title:string,
  reservation:number,
  stars:number,
  price:string,
  popular:boolean,
  off:boolean,
  offPercentage:number,
  icon:string
};

function NewServices() {
    const service: Service[] = DB.newServices;
   

    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={15}
                freeMode={true}
                modules={[FreeMode, Pagination]}
                className="mySwiper relative"
                initialSlide={service.length - 1}
               
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    }
                }}
            >
                {
                    service.slice().reverse().map((service, index) => (
                        <SwiperSlide key={index}>
                            <Card className="relative flex justify-center items-center p-0 px-3 border border-custom-gray rounded-md">
                                <CardContent className="flex gap-3 flex-col justify-start items-start px-1 py-3 w-full  overflow-clip">
                                   <div className=' flex justify-between items-start w-full'>
                                   <span className='relative'>
                                     <Image
                                        src={service.icon}
                                        alt={service.title}
                                        width={100}
                                        height={100}
                                        className="object-contain w-[63px] h-[63px] lg:w-[100px] lg:h-[100px]"/>
                                        <span className='absolute top-0 rounded-full left-0.5 flex justify-center items-center bg-custom-blue text-[11px] w-[30px] h-[30px] text-white'>{service.offPercentage}%</span>
                                   </span>
                                        <span>
                                            {
                                          service.popular && <p className='bg-custom-yello py-0.5 px-2.5 text-white text-sm rounded-full'> محبوب </p>
                                          }
                                          </span>
                                   </div>
                                   <span className='flex justify-end text-xs lg:text-base font-semibold w-full text-right line-clamp-2 max-h-9 h-9 lg:h-auto'>{service.title}</span>
                                   <div className='flex justify-between items-center w-full px-1.5 rounded-md py-2 bg-custom-gray'>
                                    <span className='flex justify-center items-center gap-0.5'>
                                       <Image src="/images/newservices/5.svg" width={15} height={15} alt='star'/>
                                      {service.stars}
                                       </span>
                                    <span className='opacity-60 text-xs lg:text-sm flex justify-center items-center gap-1'>
                                    <p> رزرو این ماه </p>
                                      {service.reservation}
                                    </span>
                                   </div>
                                   <span className='flex lg:flex-row flex-col-reverse justify-end gap-1 items-center font-semibold w-full'>
                                   <span className='flex justify-center items-center gap-0.5'>
                                    <p>تومان</p>
                                    {service.price} 
                                    </span>
                                     
                                    <p className='w-full lg:w-auto text-center'> شروع از </p>
                                   </span>
                                   <Button variant="outline" className='bg-custom-blue w-full font-medium hover:text-white hover:bg-blue-600 cursor-pointer text-white'> درخواست این خدمت </Button>
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                    ))
                }
              
            </Swiper>
        </>
    )
}

export default NewServices