import React from 'react'
type props={
    price:number;
    id:number;
    options?: { title: string; additionalPrice: number }[];
}

const PriceComponent = ({price,id,options}:props ) => {
  return (
    <div>
        <h2>${price.toFixed(2)}</h2>
       { /* options container */}
       <div className=''>
        {options?.map(option=>(
            <button key={option.title}>{option.title}</button>
        ))}
       </div>

       <div className=''>
        <div className=''>
            <span>Quantity</span>
            <div>
                
            </div>
        </div>

       </div>
    </div>
  )
}

export default PriceComponent