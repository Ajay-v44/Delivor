import { pizzas } from '@/app/components/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const categorypage = () => {
  return (
    <div className='flex text-red-500'>
      {pizzas.map(item=>(
        <Link className='w-full h-[60vh] border-r-2 border-red-500 sm:w-1/2 lg:w-1/3'  href={`/product/${item.id}`} key={item.id}>
          {/* Image Container */}
          {item.img &&(
            <div className='relative'>
              <Image src={item.img} alt=""/>

            </div>
          )}
        </Link>
      ))}
    </div>
  )
}

export default categorypage
