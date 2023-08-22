import Image from 'next/image'
import React from 'react'
import CountDown from './CountDown'

const offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]" >
      {/** text-container */}
      <div className='flex-1 flex flex-col justify-center items-center text-center gap-8 p-6 '>
        <h1 className='text-white text-5xl font-bold xl:text-6xl'>Delicious Burger & French Fry </h1>
        <p className='text-white xl:text-xl'>The best Food in town.Enjoy the world of mouth watering delicious food.</p>
        <CountDown/>
        <button className='bg-red-500 text-white rounded-md py-3 px-6'>Order Now</button>
      </div>
      {/** image-container */}
      <div className=' flex-1 w-full relative'>
        <Image src="/offerProduct.png" alt="" fill className='object-contain' />
      </div>
    </div>
  )
}

export default offer