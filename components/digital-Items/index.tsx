"use client"
import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import DB from "../../DB.json"

// Type for digital items
type DigitalItem = {
    image: string,
    title: string,
    count: number,
    icon: string
}

function DIgitalItems() {
    const digitalItems: DigitalItem[] = DB.digitalItems;

    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={15}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
            initialSlide={digitalItems.length - 1}
            breakpoints={{
                1024: {
                    slidesPerView: 6,
                    spaceBetween: 15,
                }
            }}
        >
            {
                digitalItems.slice().reverse().map((item, index) => (
                    <SwiperSlide key={index}>
                        <Card className="relative p-0 border border-custom-gray rounded-md">
                            <CardContent className="flex flex-col justify-center items-center p-0 overflow-clip">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={300}
                                    height={200}
                                    unoptimized={true}
                                    className="mb-4 rounded-md w-full object-cover aspect-3/2 overflow-clip"
                                />
                                <h3 className="mb-2 font-medium text-xs lg:text-lg">{item.title}</h3>
                                <span className="flex justify-center items-center gap-0.5 pb-4 text-gray-500 text-sm"> <h3>محصول</h3> {item.count}</span>
                                <span className="top-1 right-1 absolute backdrop-blur-sm saturate-150 p-2 rounded-full">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={20}
                                        height={20}
                                        unoptimized={true}
                                        className='w-5 lg:w-8 h-5 lg:h-8'
                                    />
                                </span>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
        </Swiper>
    )
}

export default DIgitalItems