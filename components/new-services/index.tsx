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
    title: string,
    reservation: number,
    stars: number,
    price: string,
    popular: boolean,
    off: boolean,
    offPercentage: number,
    icon: string
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
                className="relative mySwiper"
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
                            <Card className="relative flex justify-center items-center p-0 px-1 lg:px-3 border border-custom-gray rounded-md">
                                <CardContent className="flex flex-col justify-start items-start gap-3 px-1 py-3 w-full overflow-clip">
                                    <div className='flex justify-between items-start w-full'>
                                        <span className='relative'>
                                            <Image
                                                src={service.icon}
                                                alt={service.title}
                                                width={100}
                                                height={100}
                                                className="w-[63px] lg:w-[100px] h-[63px] lg:h-[100px] object-contain" />
                                            <span className='top-0 left-0.5 absolute flex justify-center items-center bg-custom-blue rounded-full w-[30px] h-[30px] text-[11px] text-white'>{service.offPercentage}%</span>
                                        </span>
                                        <span>
                                            {
                                                service.popular && <p className='bg-custom-yello px-2.5 py-0.5 rounded-full text-white text-sm'> محبوب </p>
                                            }
                                        </span>
                                    </div>
                                    <span className='flex justify-end w-full h-9 lg:h-auto max-h-9 font-semibold text-xs lg:text-base text-right line-clamp-2'>{service.title}</span>
                                    <div className='flex justify-between items-center bg-custom-gray px-1.5 py-2 rounded-md w-full'>
                                        <span className='flex justify-center items-center gap-0.5 text-sm lg:text-base'>
                                            <Image src="/images/newservices/5.svg" width={15} height={15} alt='star' className='w-[15px] lg:w-[18px] h-[15px] lg:h-[18px] object-contain' />
                                            {service.stars}
                                        </span>
                                        <span className='flex justify-center items-center gap-1 opacity-60 text-xs lg:text-base'>
                                            <p> رزرو این ماه </p>
                                            {service.reservation}
                                        </span>
                                    </div>
                                    <span className='flex lg:flex-row flex-col-reverse justify-end items-center gap-1 w-full font-semibold'>
                                        <span className='flex justify-center items-center gap-0.5'>
                                            <p>تومان</p>
                                            {service.price}
                                        </span>

                                        <p className='w-full lg:w-auto text-center'> شروع از </p>
                                    </span>
                                    <Button variant="outline" className='bg-custom-blue hover:bg-blue-600 w-full font-medium text-white hover:text-white cursor-pointer'> درخواست این خدمت </Button>
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