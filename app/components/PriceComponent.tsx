"use client";
import React, { useEffect, useState } from 'react'
type props={
    price:number;
    id:number;
    options?: { title: string; additionalPrice: number }[];
}

const PriceComponent = ({price,id,options}:props ) => {
    const [total, settotal] = useState(price);
    const [quantity, setquantity] = useState(1);
    const [selected, setselected] = useState(0);
  return (
    <div className="flex flex-col gap-4">
    
        <h2 className='text-2xl font-bold'>${price.toFixed(2)}</h2>
       { /* options container */}
       <div className='flex gap-4'>
        {options?.map(option=>(
            <button key={option.title} className='p-2 ring-1 ring-red-400 rounded-md '>{option.title}</button>
        ))}
       </div>
{/* Quantity and add button container */}
       <div className='flex justify-between items-center'>
        <div className='flex justify-between w-full p-3 ring-1 ring-red-500'>
            <span>Quantity</span>
            <div className='flex gap-4 items-center'>
                <button>{'<'}</button>
                <span>1</span>
                <button>{'>'}</button>
            </div>
        </div>
                <button className='uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500'>Add to Cart</button>
       </div>
    </div>
  ) 
}

export default PriceComponent