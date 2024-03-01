import React from 'react';
import explore1 from '../../assets/explore1.png'
import explore1Decor from '../../assets/explore1.bafb60cf.svg'
import { MdArrowForward } from 'react-icons/md';
const ExploreItem = () => {
  return (
    <div className='min-w-[350px] lg:max-w-[380px] max-w-[482px] shadow-sm p-5 shadow-gray-500    rounded-3xl'>
    <div className='flex justify-between items-center '>
      <div className='rounded-full w-max bg-slate-200'>
        <img src={explore1} alt="" className='w-[80px] h-[80px]' />
      </div>
      <div>
        <p className='text-sm '>155 products</p>
      </div>
    </div>
    <div className='flex items-center'>
  <div className='flex flex-col gap-10 w-1/3'>
  <div className='flex flex-col'>
      <span className='text-sm text-gray-400'>Manufacturar</span> 
      <p className='text-4xl font-semibold'>Backpack</p>
    </div>
    <span className='font-light flex items-center gap-3'>See Collection <MdArrowForward/> </span>
  </div>
  <div className='w-2/3'>
    <img src={explore1Decor} alt="" className=' ' />
  </div>
    </div>
  </div>
  );
}

export default ExploreItem;
