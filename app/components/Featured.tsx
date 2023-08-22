import Image from 'next/image'
import React from 'react'

const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-red-500'>
      {/* WRAPPER */}
      <div className='w-max flex'>
        {/* SINGLE ITEM */}

        <div className='w-screen h-[60vh] flex flex-col items-center justify-around p-4'>
          {/* image container  */}
          <div className='relative flex-1 w-full'>
            <Image src="/temporary/p1.png" alt="" fill className='object-contain'/>

          </div>

          {/* text container */}
          <div className=''>
            <h1>Title</h1>
            <p>Desc</p>
            <span>123</span>
            <button>Add to cart</button>


          </div>
        </div>

      </div>

    </div>
  )
}

export default Featured