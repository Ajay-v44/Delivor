import { pizzas } from '@/app/components/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const categorypage = () => {
  return (
    <div className='flex flex-wrap text-red-500'>
      {pizzas.map(item => (
        <Link className='w-full h-[60vh] border-r-2  border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group even:bg-fuchsia-100' href={`/product/${item.id}`} key={item.id}>
          {/* Image Container */}
          {item.img && (
            <div className='relative h-[80%]'>
              <Image src={item.img} alt="" fill className='object-contain' />

            </div>
          )}
          {/* Text Container */}
          <div>
            <h1 className='flex items-center justify-between font-bold '>{item.title}</h1>
            <h2 className='text-xl'>${item.price}</h2>
            <button className='hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md'>Add to cart</button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default categorypage
