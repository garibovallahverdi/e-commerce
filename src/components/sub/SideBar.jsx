import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import { TbSunHigh } from 'react-icons/tb'
import logo from "../../asets/logo.14d0e71d.svg";
import facebook from '../../asets/facebook.b22e79d5.svg'
import youtube from '../../asets/youtube.bcae2a7a.svg'
import telegram from '../../asets/telegram.a3c75624.svg'
import twitter from '../../asets/twitter.d12eec73.svg'
import { CiSearch } from 'react-icons/ci';
import SearchLg from './SearchLg';
import Menu from './Menu';

const SideBar = ({setSideMenu,sideMenu}) => {
  return (
    <div className={`fixed shadow-2xl flex flex-col overflow-hidden  peer left-0 z-50 top-0 w-full sm:w-3/5 h-screen  bg-white pt-5 px-9 ${sideMenu?"translate-x-[0%]":"-translate-x-[100%] "} transition-all`}>
    <div className="flex  justify-between ">
        <img src={logo} alt="" className="w-36 mt-4" />
        <RxCross1 onClick={()=>setSideMenu(false)} className='absolute right-4 text-[18px] cursor-pointer'/>
      </div>
      <p className="text-sm mt-10">Discover the most outstanding articles on all topics of life. Write your stories and share them</p>
      <div className='flex w-full justify-between items-center mt-5'>
        <div className='flex gap-2'>
            <img src={facebook} alt="" className='w-8' />
            <img src={twitter} alt="" className='w-8' />
            <img src={youtube} alt="" className='w-8' />
            <img src={telegram} alt="" className='w-8' />
        </div>
        <div className='w-14 h-14 cursor-pointer flex items-center justify-center text-[30px] text-gray-500 rounded-full bg-slate-100'>
        <TbSunHigh/>
        </div>
      </div>
      <div className='w-full mt-8'>
  <SearchLg/>
  </div>
  <div className='w-full mt-8'>
            <Menu/>
        </div>
    </div>
  )
}

export default SideBar
