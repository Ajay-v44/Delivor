import Image from 'next/image'
import React from 'react'

const CartPage = () => {
  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row'>
      {/* product container */}
      <div className='h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6'>
        {/* single item container */}
        <div className='flex items-center justify-between mb-4 overflow-scroll'>
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <h1 className='uppercase text-xl font-bold'>Sicilian</h1>
          <span>size</span>
          <h2 className='font-bold'>$79.90</h2>
          <span className='cursor-pointer'>x</span>

        </div>


      </div>
      {/* payment container */}
      <div className='h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3'>
        <div className='flex justify-between'>
          <span className=''>subtotal</span>
          <span className=''>$81.70</span>


        </div>
        <div className='flex justify-between'>
          <span className=''>Service Cost</span>
          <span className=''>$0.00</span>


        </div>
        <div className='flex justify-between'>
          <span className=''>Delivery Cost</span>
          <span className='text-green-500'>Free</span>


        </div>
        <hr className='my-2' />
        <div className='flex justify-between'>
          <span className=''>Total(Incl.GST)</span>
          <span className='font-bold'>$81.70</span>


        </div>
        <button className='bg-red-500 text-white p-3 round w={100} height={100} rounded'>Checkout</button>


      </div>


    </div>
  )
}

export default CartPage
