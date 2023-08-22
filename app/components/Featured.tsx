import Image from 'next/image'
import React from 'react'
import { featuredProducts } from './data'

const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-red-500'>
      {/* WRAPPER */}
      <div className='w-max flex'>
        {/* SINGLE ITEM */}
        {
          featuredProducts.map((item) => (
            <div key={item.id} className='w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w[23w] xl:h-[60vh]'>
              {/* image container  */}
              {item.img && (
                <div className='relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500'>
                  <Image src={item.img} alt="" fill className='object-contain   ' />

                </div>
              )}

              {/* text container */}
              <div className='flex-1 flex flex-col justify-center gap-4 text-center'>
                <h1 className='text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl '>{item.title}</h1>
                <p className="p-4 2xl:p-8" >{item.desc}</p>
                <span className='text-xl font-bold'>${item.price}</span>
                <button className='bg-red-500 text-white p-2 rounded-md'>Add to cart</button>


              </div>
            </div>
          ))}
      </div>

    </div>
  );
};

export default Featured