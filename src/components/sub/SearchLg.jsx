import React, { useState } from 'react'
import {RxCross1,RxCross2} from 'react-icons/rx'
import {CiSearch} from 'react-icons/ci'

const SearchLg = ({setSearch}) => {
    const [searchVal,setSearchVal]=useState('')
  return (
    <div className='relative w-full flex items-center'>
    <input type="text" value={searchVal} onChange={(e)=>setSearchVal(e.target.value)} placeholder='Type and Press Enter' className='px-8 w-full bg-[#f8fafc] border h-10 outline-none rounded-full lg:rounded-none' />
    <CiSearch className='absolute left-1 text-[25px] cursor-pointer'/>
    <RxCross1 onClick={()=>setSearch(false)} className='absolute lg:block hidden right-1 text-[17px] cursor-pointer'/>
    <RxCross2  className='absolute right-1 text-[20px] lg:hidden block cursor-pointer'/>

  </div>
  )
}

export default SearchLg
