import React from 'react'
import Link from 'next/link'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Image from 'next/image'

function Navigation() {
    return (
        <div className='hidden md:flex flex-row-reverse items-center gap-4 py-3 font-medium'>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className='font-medium h-12 min-w-[110px] flex items-center px-3'>
                            دسته بندی ها
                            <Image src="/vectors/Category.svg" width={24} height={24} alt='Category' className='ml-1 min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px]' />
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink className='min-w-[150px] text-right'>
                                حالا هر نوع دسته بندی که باید اینجا باشه
                            </NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <Link href='/products' className='flex justify-center items-center gap-1 -mr-3 px-3 border-b border-transparent hover:border-custom-border-gray transition-all pb-1 h-12 min-w-[110px]'>
                <h3 className='text-base'>تخفیفات</h3>
                <Image src="/vectors/Discount.svg" width={24} height={24} alt='discount' className='min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px]' />
            </Link>
            <Link href='/about' className='flex justify-center items-center gap-1 px-3 border-b border-transparent hover:border-custom-border-gray transition-all pb-1 h-12 min-w-[110px]'>
                <h3 className='text-base'>وبلاگ</h3>
                <Image src="/vectors/Document.svg" width={24} height={24} alt='blog' className='min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px]' />
            </Link>
            <Link href='/contact' className='flex justify-center items-center gap-1 px-3 border-b border-transparent hover:border-custom-border-gray transition-all pb-1 h-12 min-w-[110px]'>
                <h3 className='text-base'>درباره ما</h3>
                <Image src="/vectors/Group 3.svg" width={24} height={24} alt='info' className='min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px]' />
            </Link>
            <Link href='/contact' className='flex justify-center items-center gap-1 px-3 border-b border-transparent hover:border-custom-border-gray transition-all pb-1 h-12 min-w-[110px]'>
                <h3 className='text-base'>تماس با ما</h3>
                <Image src="/vectors/Call.svg" width={24} height={24} alt='call' className='min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px]' />
            </Link>
        </div>
    )
}

export default Navigation