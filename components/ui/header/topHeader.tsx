import React from 'react'
import Link from 'next/link'
import { StoreIcon, ShoppingCartIcon, HeartIcon, MessageCircleIcon } from 'lucide-react'
import { Search } from './search'
import { Badge } from '../badge'
import { Button } from '../button'
import { Separator } from '../separator'
import SelectLanguage from '@/components/languages'
import Login from '@/components/register'

function TopHeader() {
  return (
    <div className='flex justify-center items-center px-5 lg:px-0 py-6 border-0 border-custom-border-gray lg:border-b w-full'>
      <div className='flex flex-row-reverse justify-center items-center gap-1.5 lg:gap-4 container'>
        {/* Icon */}
        <Link href="./" className='hidden lg:block'>
          <span className='flex justify-center items-center gap-1 w-auto min-w-[90px]'>
            <h3 className='font-bold'> تک استور</h3>
            <StoreIcon />
          </span>
        </Link>
        {/* Main search input */}
        <Search />
        {/* last part Shop-Cart Fav, Lan, Register-Login */}
        <div className='flex flex-row-reverse justify-center items-center gap-3'>
          <Button variant="outline" className='hidden relative lg:flex justify-center items-center bg-transparent shadow-none mr-[1vw] border-none cursor-pointer'>
            {/* User's Add-Cart data will fetches here  */}
            <Badge variant="secondary" className='-top-1 -right-0.5 absolute bg-custom-blue text-white'>2</Badge>
            <ShoppingCartIcon className='size-6' />
          </Button>
          <Button variant="outline" className='hidden relative lg:flex justify-center items-center bg-transparent shadow-none border-none cursor-pointer'>
            {/* User's Fav data will fetches here  */}
            <Badge variant="secondary" className='-top-1 -right-0.5 absolute bg-custom-blue text-white'>1</Badge>
            <HeartIcon className='size-6' />
          </Button>
          <div className='flex flex-row-reverse justify-center items-center gap-3'>
            <span className='hidden lg:flex justify-center items-center gap-1'>
              <MessageCircleIcon />
              <h3> گفتگوها </h3>
            </span>
            <Separator className='hidden lg:block bg-custom-gray p-px py-3' orientation='vertical' />
            {/* language */}
            <SelectLanguage />
          </div>
          {/* Registe-Login */}
          <Login />
        </div>
      </div>
    </div>
  )
}

export default TopHeader