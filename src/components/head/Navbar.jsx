import React, { useEffect, useRef, useState } from 'react';
import logo from '../../assets/logo.svg'
import { CiSearch } from "react-icons/ci";
import { LuUser } from "react-icons/lu";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { CgMenuGridO } from "react-icons/cg";
import { useSelector,useDispatch } from 'react-redux'
import Actions from '../../redux/actions';
import SubMenu from './SubMenu';



const Navbar = () => {
  const menuState = useSelector(state=>state.menuReducer.setMenu)
  const dispatch =useDispatch()
  const dropdownRef = useRef(null);

  const setSubMenu=()=>{
   dispatch(Actions.MenuActions.setMenu())
   console.log(menuState);
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dispatch(Actions.MenuActions.setMenuClose())
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  



  return (
    <div className='w-full h-20 sticky top-0 z-50 bg-white '>
        <div className='container mx-auto  h-full  px-3 md:px-10 z-50 bg-white  flex items-center justify-between'>
          <div className='md:hidden flex text-3xl font-bold cursor-pointer transition-all  hover:bg-slate-100 p-2 rounded-full'>
            <CgMenuGridO/>
          </div>
           <div className='w-[140px] h-full flex items-center' >
             <img src={logo} alt="" className='w-[140px] h-[40px]'/>
            </div>  

            <div className='grow md:flex justify-center hidden'>
                <ul className='flex gap-3 h-full items-center text-base font-medium w-full justify-center '>
                    <li  className='rounded-full cursor-pointer transition-all px-4 py-2 hover:bg-slate-100 '>Men</li>
                    <li  className='rounded-full cursor-pointer transition-all px-4 py-2 hover:bg-slate-100 '>Women</li>
                    <li  className='rounded-full cursor-pointer transition-all px-4 py-2 hover:bg-slate-100 '>Kids</li>
                    <li ref={dropdownRef} onMouseEnter={setSubMenu}  className='rounded-full cursor-pointer transition-all px-4 py-2 hover:bg-slate-100 '>More </li>
                  
                    
                </ul>
            </div>

            <div className='flex h-full justify-center items-center gap-3'>
              <div className='rounded-full p-3 hover:bg-slate-100 text-2xl cursor-pointer transition-all hidden md:block'>
                <CiSearch/>
              </div>
              <div className='rounded-full p-3 hover:bg-slate-100 text-2xl cursor-pointer transition-all hidden md:block'>
                <LuUser/>
              </div>
              <div className='rounded-full p-3 hover:bg-slate-100 text-2xl cursor-pointer transition-all'>
                <HiOutlineShoppingCart/>
              </div>
            </div>

        </div>
      
      <SubMenu/>
    </div>
  );
}

export default Navbar;
