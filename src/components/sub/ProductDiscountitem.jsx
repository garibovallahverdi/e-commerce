import React from 'react'
import product from '../../assets/5.webp'

const ProductDiscountitem = ({background}) => {
  return (
    <div className={`md:w-[30rem] w-[80%] h-[15rem] ${background} flex py-5 px-5 relative `}>
    <div className='z-40 flex flex-col h-full items-start w-full md:w-[50%] justify-between '>
        <div >
        <span className='text-sm text-[#6b7280]'>Explore new arrivals</span>
        <p className='mt-2 md:text-xl'>Shop the latest from top brands</p>
        </div>
        <button className='rounded-full py-2 px-4 bg-white '>Show me all</button>
    </div>
    <div className='md:w-[70%] w-full h-full absolute right-0 top-0'> 
        <img src={product}  className='w-full h-full object-cover' alt="" />
    </div>
</div>
  )
}

export default ProductDiscountitem
