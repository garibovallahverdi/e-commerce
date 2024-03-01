import React, { useState } from 'react';
import adsOne from '../../assets/skinads.jpg'
import adsTwo from '../../assets/menshoes.jpg'
import { GoArrowRight } from "react-icons/go";
import { UseSelector, useSelector } from 'react-redux'

const SubMenu = () => {
    const [AdsOne, setAdsOne] = useState(false);
    const [AdsTwo, setAdsTwo] = useState(false);

    const setMenu = useSelector(state=>state.menuReducer.setMenu)

  return (
    setMenu&&(
    <div className='w-full overflow-hidden absolute bg-white z-50'>
        <div className='container h-full bg-slate-50 mx-auto  p-8 flex gap-6 lg:gap-3 flex-wrap justify-between'>
            <div className='flex gap-5 sm:w-max w-full px-2 sm:flex-row flex-wrap  '>
                <ul className='max-w-[150px] sm:min-w-[150px]'>
                    <li className='flex flex-col gap-3'><span className='pl-2 text-sm font-semibold border-b-slate-200 border-b'>Clothes</span>
                        <ul className='flex flex-col text-[12px] gap-3'>
                            <li className='hover:border-b-slate-400 border-b pl-2 py-1 cursor-pointer'>Jacket</li>
                            <li className='hover:border-b-slate-400 border-b pl-2 py-1 cursor-pointer'>Shoes</li>
                            <li className='hover:border-b-slate-400 border-b pl-2 py-1 cursor-pointer'>Shirts</li>
                            <li className='hover:border-b-slate-400 border-b pl-2 py-1 cursor-pointer'>Monts</li>
                            <li className='hover:border-b-slate-400 border-b pl-2 py-1 cursor-pointer'>Shoes</li>
                        </ul>
                    </li>
                </ul>

                <ul className='max-w-[150px] sm:min-w-[150px]'>
                    <li className='flex flex-col gap-3'><span className='pl-2 text-sm font-semibold border-b-slate-200 border-b'>Accessories</span>
                        <ul className='flex flex-col text-[12px] gap-3'>
                            <li className='hover:border-b-slate-400 border-b pl-2 py-1 cursor-pointer'>Jacket</li>
                            <li className='hover:border-b-slate-400 border-b pl-2 py-1 cursor-pointer'>Shoes</li>
                            <li className='hover:border-b-slate-400 border-b pl-2 py-1 cursor-pointer'>Shirts</li>
                            <li className='hover:border-b-slate-400 border-b pl-2 py-1 cursor-pointer'>Monts</li>
                            <li className='hover:border-b-slate-400 border-b pl-2 py-1 cursor-pointer'>Shoes</li>
                        </ul>
                    </li>
                </ul>

                <ul className='max-w-[150px] sm:min-w-[150px]'>
                    <li className='flex flex-col gap-3'><span className='pl-2 text-sm font-semibold border-b-slate-200 border-b'>Skin care</span>
                        <ul className='flex flex-col text-[12px] gap-3'>
                            <li className='hover:border-b-slate-400 border-b pl-2 py-1 cursor-pointer'>Jacket</li>
                            <li className='hover:border-b-slate-400 border-b pl-2 py-1 cursor-pointer'>Shoes</li>
                            <li className='hover:border-b-slate-400 border-b pl-2 py-1 cursor-pointer'>Shirts</li>
                            <li className='hover:border-b-slate-400 border-b pl-2 py-1 cursor-pointer'>Monts</li>
                            <li className='hover:border-b-slate-400 border-b pl-2 py-1 cursor-pointer'>Shoes</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className='md:flex gap-3 flex-wra hidden'>
                <div className='w-[300px] h-[200px] relative rounded-xl overflow-hidden cursor-pointer' 
                onMouseEnter={()=>setAdsOne(true)}
                onMouseLeave={()=>setAdsOne(false)}

                >
                  <div className={`absolute ${AdsOne? 'w-full h-full top-0 left-0':'w-0 h-0 top-1/2 left-1/2 text-[5px]'} flex  justify-center duration-300 items-center overflow-hidden`}>
                    <div className='absolute w-full h-full bg-white opacity-50 z-10'></div>
                        <p className='flex z-50 items-center gap-3'>Check out more <GoArrowRight className='text-2xl'/></p>  
                    </div>  
                  <img src={adsOne} alt="" className='w=full h-full object-cover rounded-xl'/>
                  <span className='absolute top-1  right-0 block rounded-s-xl px-2 text-sm font-light   bg-purple-400'>Discounts up to 50%</span>
                </div>

                <div className='w-[300px] h-[200px] relative rounded-xl overflow-hidden cursor-pointer' 
                onMouseEnter={()=>setAdsTwo(true)}
                onMouseLeave={()=>setAdsTwo(false)}

                >
                  <div className={`absolute ${AdsTwo? 'w-full h-full top-0 left-0':'w-0 h-0 top-1/2 left-1/2 text-[5px]'} flex  justify-center duration-300 items-center overflow-hidden`}>
                    <div className='absolute w-full h-full bg-white opacity-50 z-10'></div>
                        <p className='flex z-50 items-center gap-3'>Check out more <GoArrowRight className='text-2xl'/></p>  
                    </div>  
                  <img src={adsTwo} alt="" className='w=full h-full object-cover rounded-xl'/>
                  <span className='absolute top-[50%]  left-0 block rounded-e-xl px-2 text-sm font-medium   bg-white'>Ready to the new season</span>
                </div>
            </div>

            
        </div>
      
    </div>
    )
  );
}

export default SubMenu;
