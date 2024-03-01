import React from 'react'

const Menu = () => {
  return (
    <div>
    <ul className='flex gap-x-3 gap-y-5 flex-col lg:flex-row'>
      <li className='transition-all rounded-sm lg:rounded-2xl hover:bg-[#f1f5f9] cursor-pointer px-4 py-1'>Men</li>
      <li className='transition-all rounded-sm lg:rounded-2xl hover:bg-[#f1f5f9] cursor-pointer px-4 py-1'>Beauty</li>
      <li className='transition-all rounded-sm lg:rounded-2xl hover:bg-[#f1f5f9] cursor-pointer px-4 py-1'>Women</li>
      <li className='transition-all rounded-sm lg:rounded-2xl hover:bg-[#f1f5f9] cursor-pointer px-4 py-1'>Sport</li>
      <li className='transition-all rounded-sm lg:rounded-2xl hover:bg-[#f1f5f9] cursor-pointer px-4 py-1'>Search</li>
    </ul>
  </div>
  )
}

export default Menu
