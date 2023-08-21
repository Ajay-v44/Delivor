import Image from 'next/image'
import React from 'react'

const slider = () => {
    return (
        <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]'>
            <div className='h-1/2 flex items-center flex-col gap-0 text-red-500 font-bold'>
                <h1 className='text-5xl text-center uppercase p-4 md:text-6xl xl:text-7xl'>Text</h1>
                <button className='bg-red-500 text-white py-4 px-8'>Order</button>
            </div>

            <div className='w-full h-1/2 relative'>
            <Image src="/slide1.png" alt="" fill className='object-cover' />

            </div>

        </div>
    )
}

export default slider