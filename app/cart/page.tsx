import Image from 'next/image'
import React from 'react'

const CartPage = () => {
  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 overflow-scroll'>
      {/* product container */}
      <div className='h-1/2 p-4 flex flex-col justify-center'>
        {/* single item container */}
        <div className='flex items-center justify-between mb-4 overflow-scroll'>
          <Image src="/temporary/p1.png" alt="" width={100} height={100}/>
          <h1 className='uppercase text-xl font-bold'>p name</h1>
          <span>size</span>


        </div>
        <h2 className='font-bold'>price</h2>
        <span className='cursor-pointer'>x</span>

      </div>
      {/* payment container */}
      <div className='h-1/2 p-4 bg-fuchsia-50 '>
      <div className=''>
        <span className=''>subtotal</span>
        <span className=''>181.70</span>
        

      </div>
      <hr className=''/>
      <button className='bg-red-500 text-white p-3 round w={100} height={100}'>Checkout</button>
  

      </div>


    </div>
  )
}

export default CartPage
