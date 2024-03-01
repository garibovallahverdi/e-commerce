import React from 'react'
import Hero1 from '../../assets/hero-right-2.webp'
import { FiSearch } from 'react-icons/fi'

const HeroItems = () => {
  return (
    <div className='flex relative items-center  w-full h-full'>
    <div className='absolute  flex flex-col gap-y-8 items-start  z-40'>
      <p className='md:text-xl text-base '>In this season, find the best 🔥</p>
      <h2 className='md:text-5xl text-3xl lg:w-3/4 w-full font-semibold'>Exclusive collection for everyone</h2>

      <button className='flex items-center btn-secondary'><span>Explore now</span> <FiSearch/> </button>
    </div>
    <div className='lg:w-[800px] w-full   absolute h-full right-0 top-0 z-30 '>
        <img src={Hero1} alt="" className='w-full h-full object-contain'/>
    </div>
  </div>
  )
}

export default HeroItems
