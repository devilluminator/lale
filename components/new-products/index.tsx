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

type Product = {
    image: string;
    description: string;
    price: string;
    popular: boolean;
    // Optional properties
    off: boolean | undefined;
    offPercentage: number | undefined;
};

function NewProducts() {
    const products: Product[] = DB.newProducts;


    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={15}
                freeMode={true}
                modules={[FreeMode, Pagination]}
                className="relative mySwiper"
                initialSlide={products.length - 1}

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
                    products.slice().reverse().map((product, index) => (
                        <SwiperSlide key={index}>
                            <Card className="relative flex justify-center items-center p-0 px-1 border border-custom-gray rounded-md">
                                <CardContent className="flex flex-col justify-center items-center px-1 py-3 lg:max-w-[288px] min-h-[270pxpx] lg:min-h-[388px] overflow-clip">
                                    <Image
                                        src={product.image}
                                        alt={`Product ${index}`}
                                        width={400}
                                        height={300}
                                        unoptimized={true}
                                        className="mb-4 rounded-md lg:min-h-[217px] object-cover aspect-3/2"
                                    />
                                    <h3 className="mb-2 min-h-14 overflow-hidden font-semibold text-xs text-right line-clamp-2" dir='rtl'>{product.description || `Product ${index}`}</h3>
                                    <span className="flex justify-between items-center gap-0.5 pb-4 w-full text-gray-500 text-sm" dir='rtl'>
                                        <span className="flex justify-center items-center bg-custom-light-blue p-1 rounded-[12px] lg:rounded-[21px] w-9 lg:w-[51px] h-9 lg:h-[51px]">
                                            <Image src="/vectors/bag.svg" alt="Cart" width={26} height={26} unoptimized={true} className='w-5 lg:w-[26px] h-5 lg:h-[26px] object-contain' />
                                        </span>
                                        <span className='font-semibold text-[14px] text-black lg:text-sm'> {product.price || 'N/A'}</span>
                                    </span>
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </>
    )
}

export default NewProducts