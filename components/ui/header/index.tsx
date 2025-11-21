import React from 'react'
import Navigation from './navigation'
import TopHeader from './topHeader'

function Header() {
  return (
    <div className='flex justify-between flex-col items-center w-full'>
        <TopHeader />
        <Navigation />
    </div>
  )
}

export default Header