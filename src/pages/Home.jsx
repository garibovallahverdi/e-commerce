import React from 'react'
import Moon from '../assets/Moon.d5aa06ae.svg'
import Slider from "react-slick";
import HeroItems from '../components/sub/HeroItems';
import ProductDiscountitem from '../components/sub/ProductDiscountitem';
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import {BsArrowRight, BsClockHistory} from 'react-icons/bs'
import ProductItem from '../components/sub/ProductItem';
import Footer from '../components/head/Footer';
import HIW1 from '../assets/HIW1img.png'
import HIW2 from '../assets/HIW2img.webp'
import HIW3 from '../assets/HIW3img.webp'
import HIW4 from '../assets/HIW4img.png'
import logo from '../assets/logo.svg'
import right from '../assets/rightLargeImg.webp'

import {LuCrown,LuGem} from 'react-icons/lu'
import {RiMenLine,RiWomenLine} from 'react-icons/ri'
import {MdOutlineSportsBasketball,MdChildCare, MdArrowForward} from 'react-icons/md'
import { GoArrowRight } from 'react-icons/go';
import ExploreItem from '../components/sub/ExploreItem';
const Home = () => {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='w-full  '>
       <div className='w-full relative bg-[#e3ffe6] h-[70vh]  md:h-[calc(100vh_-_50px)] z'>
        <img src={Moon} alt=""  className='w-full h-full absolute object-cover'/>
         <div className="container mx-auto h-full flex ">
            <HeroItems/>
         </div>
       </div>

       <div className="container mx-auto py-24   ">
          <p className='text-3xl font-semibold'>Discover more. <span className='text-[#6b7280]'> Good things are waiting for you</span></p>
         <div className='w-full overflow-scroll'>
         <div className='mt-10 w-max flex  gap-x-4'>
            <ProductDiscountitem background='bg-[#f4f2df]'/>
            <ProductDiscountitem background='bg-[#f4e9e9]'/>
            <ProductDiscountitem background='bg-[#e6ecf5]'/>
            <ProductDiscountitem background='bg-[#f4e9e9]'/>
            <ProductDiscountitem background='bg-[#e4e1e9]'/>
            <ProductDiscountitem background='bg-[#e6ecf5]'/>
          </div>
         </div>
       </div>

       <div className="container mx-auto ">
       <p className='text-3xl font-semibold'>New Arrivals. <span className='text-[#6b7280]'> REY backpacks & bags</span></p>
        <div className='flex mt-20  w-full overflow-scroll'>
            <div className='w-max flex gap-6'>
             <ProductItem/>
             <ProductItem/>
             <ProductItem/>
             <ProductItem/>
             <ProductItem/>
             <ProductItem/>
             <ProductItem/>
             </div>
        </div>
       </div>



       <div className=" container mx-auto grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4    py-10 md:py-20 md:my-20 gap-10">
          
          <div className='flex gap-6 flex-col w-52 items-center mx-auto sm:mx-0'>
            <div className='w-[70%]'>
                <img src={HIW1} alt="" className='w-full'/>
            </div>
            <div className='flex flex-col gap-3 items-center'>
                <button className='bg-[#fee2e2] rounded-full text-xs px-2 py-1'>Step 1</button>
                <p className='font-semibold'>Filter & Discover</p>
                <span className='text-center text-sm text-[#6b7280]'>Smart filtering and suggestions make it easy to find</span>

            </div>
          </div>

          <div className='flex gap-6 flex-col w-52 items-center mx-auto sm:mx-0'>
            <div className='w-[70%]'>
                <img src={HIW2} alt="" className='w-full'/>
            </div>
            <div className='flex flex-col gap-3 items-center'>
                <button className='bg-[#e0e7ff] rounded-full text-xs px-2 py-1'>Step 2</button>
                <p className='font-semibold'>Add to bag</p>
                <span className='text-center text-sm text-[#6b7280]'>Easily select the correct items and add them to the cart</span>

            </div>
          </div>

          <div className='flex gap-6 flex-col w-52 items-center mx-auto sm:mx-0'>
            <div className='w-[70%]'>
                <img src={HIW3} alt="" className='w-full'/>
            </div>
            <div className='flex flex-col gap-3 items-center'>
                <button className='bg-[#fee2e2] rounded-full text-xs px-2 py-1'>Step 3</button>
                <p className='font-semibold'>Fast shipping</p>
                <span className='text-center text-sm text-[#6b7280]'>The carrier will confirm and ship quickly to you</span>

            </div>
          </div>

          <div className='flex gap-6 flex-col w-52 items-center mx-auto sm:mx-0'>
            <div className='w-[70%]'>
                <img src={HIW4} alt="" className='w-full'/>
            </div>
            <div className='flex flex-col gap-3 items-center'>
                <button className='bg-[#fef9c3] rounded-full text-xs px-2 py-1'>Step 4</button>
                <p className='font-semibold'>Enjoy the product</p>
                <span className='text-center text-sm text-[#6b7280]'>Have fun and enjoy your 5-star quality products</span>

            </div>
          </div>

       </div>


  <div className="container mx-auto py-10 flex md:flex-row flex-col gap-y-10 items-center">
    <div className='flex flex-col items-start gap-10 mx-auto w-[70%]'>
        <div className='w-32'>
        <img src={logo} alt="" className='w-full' />
        </div>
        <h2 className='text-5xl font-semibold'>Earn free money with Ciseco</h2>
<span>With Ciseco you will get freeship & savings combo...</span>
 <div className='flex gap-3'>
  <button className='btn-secondary !px-4 md:!px-9 md:!text-base !text-xs'>Savings combo</button>
  <button className='btn-secondary !px-4 !md:!px-9 !bg-[#eff0f2] md:!text-base !text-xs !text-black'>Discover more</button>
  </div>
    </div>
    <div>
        <img src={right} alt="" />
    </div>

  </div>



  <div className='w-full bg-[#f7f7f9]'>
  <div className="container mx-auto py-16 flex flex-col items-center">
      <p className='text-3xl md:text-4xl lg:text-5xl font-semibold '>Start exploring.</p>

      <div className='w-full flex justify-center mt-10  overflow-scroll '>
          <ul className='flex gap-1 bg-white shadow-lg rounded-full '>
            <li className='flex items-center gap-2 text-sm hover:text-black text-[#475569] font-medium px-4 py-2   lg:px-7 lg:py-3 rounded-full cursor-pointer '> <RiWomenLine className='text-lg'/> <span>Women</span></li>
            <li className='flex items-center gap-2 text-sm hover:text-black text-[#475569] font-medium px-4 py-2   lg:px-7 lg:py-3  rounded-full cursor-pointer btn-active'> <RiMenLine className='text-lg'/> <span>Men</span></li>
            <li className='flex items-center gap-2 text-sm hover:text-black text-[#475569] font-medium px-4 py-2   lg:px-7 lg:py-3  rounded-full cursor-pointer '> <MdChildCare className='text-lg'/> <span>Kids</span></li>
            <li className='flex items-center gap-2 text-sm hover:text-black text-[#475569] font-medium px-4 py-2   lg:px-7 lg:py-3  rounded-full cursor-pointer'> <MdOutlineSportsBasketball className='text-lg'/> <span>Sports</span></li>
            <li className='flex items-center gap-2 text-sm hover:text-black text-[#475569] font-medium px-4 py-2   lg:px-7 lg:py-3  rounded-full cursor-pointer'> <LuCrown className='text-lg'/> <span>Beauty</span></li>
            <li className='flex items-center gap-2 text-sm hover:text-black text-[#475569] font-medium px-4 py-2   lg:px-7 lg:py-3  rounded-full cursor-pointer'> <LuGem className='text-lg'/> <span>Jewelry</span></li>
            
          </ul>
      </div>

    <div className='container mx-auto  flex gap-5 flex-wrap justify-center mg:justify-between mt-10'>
    <ExploreItem/>
    <ExploreItem/>
    <ExploreItem/>
    <ExploreItem/>
    <ExploreItem/>
    <ExploreItem/>
      
    </div>
  </div>
  </div>



       <Footer/>
    </div>
  )
}

export default Home
