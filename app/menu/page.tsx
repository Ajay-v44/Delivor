import Link from 'next/link'
import React from 'react'
import { menu } from '../components/data'

const MenuPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center'>

      {menu.map(category => (
        <Link href={`/menu/${category.slug}`} key={category.id} className='w-full h-1/3 bg-cover p-8 md:h-1/2' style={{ backgroundImage: `url(${category.img})` }}>

          <div className={`text-(${category.color})`}>
            <h1 className='upper-case font-bold text-3xl'>{category.title}</h1>
            <p className='text-sm my-8'>{category.desc}</p>
            <button className='text-white bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 py-2 px-6 rounded-md shadow-md transition-colors duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
  Explore
</button>





          </div>

        </Link>
      ))}
    </div>
  )
}

export default MenuPage