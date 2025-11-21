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
                        <NavigationMenuTrigger className='font-medium'>
                            دسته بندی ها
                            <Image src="/vectors/Category.svg" width={24} height={24} alt='Category' className='ml-1' />
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink className='min-w-[150px] text-right'>
                                حالا هر نوع دسته بندی که باید اینجا باشه
                            </NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <Link href='/products' className='flex justify-center items-center gap-1 -mr-3 px-3 hover:border-custom-border-gray border-b-0 hover:border-b transition-all'>
                <h3>تخفیفات</h3>
                <Image src="/vectors/Discount.svg" width={24} height={24} alt='discount' />
            </Link>
            <Link href='/about' className='flex justify-center items-center gap-1 px-3 hover:border-custom-border-gray border-b-0 hover:border-b transition-all'>
                <h3>وبلاگ</h3>
                <Image src="/vectors/Document.svg" width={24} height={24} alt='blog' />
            </Link>
            <Link href='/contact' className='flex justify-center items-center gap-1 px-3 hover:border-custom-border-gray border-b-0 hover:border-b transition-all'>
                <h3>درباره ما</h3>
                <Image src="/vectors/Group 3.svg" width={24} height={24} alt='info' />
            </Link>
            <Link href='/contact' className='flex justify-center items-center gap-1 px-3 hover:border-custom-border-gray border-b-0 hover:border-b transition-all'>
                <h3>تماس با ما</h3>
                <Image src="/vectors/Call.svg" width={24} height={24} alt='call' />
            </Link>
        </div>
    )
}

export default Navigation