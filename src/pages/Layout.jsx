import React,{useState} from 'react'
import Navbar from '../components/head/Navbar'
import Home from './Home'
import SubMenu from '../components/head/SubMenu'
const Layout = () => {
  return (
    <div className='w-full px-2 bg-slate-50  '>
      <Navbar />
       <Home/>
      </div>
  )
}

export default Layout
