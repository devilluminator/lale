import React from 'react'

function Title() {
    return (
        <span className='flex justify-center items-center gap-1 px-6 py-9 container'>
            <span className="bg-custom-light-blue w-full h-[1.5px]" />
            <h3 className='min-w-[140px] font-bold text-xl text-center'> محصولات جدید </h3>
            <span className='bg-custom-blue rounded-full min-w-[37px] h-2'></span>
        </span>
    )
}

export default Title