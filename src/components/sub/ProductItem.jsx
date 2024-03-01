import React from 'react'
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai'
import product from '../../assets/8.webp'
import { BsClockHistory } from 'react-icons/bs'

const ProductItem = () => {
  return (
    <div className='flex flex-col w-[300px]  bg-[#f8fafc] rounded-2xl shadow-lg cursor-pointer p-2'>
    <div className='flex-1 w-full flex relative items-center justify-center '>
        <div className='absolute rounded-full bg-white text-2xl p-2 top-0 right-0'>

        <AiOutlineHeart/>
        </div>
        <img src={product} alt="" className='w-full h-full object-cover' />
        <p className='absolute flex items-center gap-x-2 px-2 w-max rounded-2xl text-xs top-0 left-0 bg-white'><BsClockHistory/> Limited edition</p>
    </div>
    <div className='flex-1 flex flex-col p-2 gap-y-3 '>
        <div className='flex flex-col'>
            <p className='font-medium'>Leather Gloves</p>
            <span className='text-sm mt-2 text-[#6b7280]'>Perfect mint green</span>
        </div>
        <div className='flex  justify-between mt-3 items-center'>
            <p className='border-2 rounded-lg text-green-500 font-medium   px-2 w-max border-green-500'>$42</p>
            <span className='flex   text-sm items-center gap-2 '><AiFillStar className='text-yellow-500 text-lg'/> 4.9 (98 reviews)</span>
        </div>
    </div>
 </div>
  )
}

export default ProductItem
