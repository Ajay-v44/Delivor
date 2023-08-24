import { singleProduct } from '@/app/components/data'
import Image from 'next/image'
import React from 'react'

const SingleProductPage = () => {
    return (
        <div className='p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-red-500 md:flex-row'>
            {/* Image Container */}
            {singleProduct.img && (
                <div className=''>
                    <Image src={singleProduct.img} alt="" className='object-contain' fill />


                </div>
            )}
            {/*Text-Container */}
            <div className=''>
                <h1>{singleProduct.title}</h1>
                <p>{singleProduct.desc}</p>
            </div>
        </div>
    )
}

export default SingleProductPage
