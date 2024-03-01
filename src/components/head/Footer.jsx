import React from "react";
import facebook from "../../assets/facebook.b22e79d5.svg";
import youtube from "../../assets/youtube.bcae2a7a.svg";
import telegram from "../../assets/telegram.a3c75624.svg";
import twitter from "../../assets/twitter.d12eec73.svg";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
         <div className="container mx-auto flex flex-col gap-5 md:flex-row py-20 border-t-2 mt-[100px]">
            <div className="md:w-[20%] sm:items-center md:items-start w-[80%] justify-between flex flex-col sm:flex-row md:flex-col gap-5">
             <div className="w-32">
                <img src={logo} alt="" className="w-full" />
             </div>
           <div className="flex flex-row md:flex-col sm:justify-between  gap-1 sm:gap-3">
            <div className="flex gap-x-2"><img src={facebook} alt="" className="w-5" /><span className="text-sm md:block hidden">Facebook</span></div>
            <div className="flex gap-x-2"><img src={youtube} alt="" className="w-5" /><span className="text-sm md:block hidden">Youtube</span></div>
            <div className="flex gap-x-2"><img src={twitter} alt="" className="w-5" /><span className="text-sm md:block hidden">Twitter</span></div>
            <div className="flex gap-x-2"><img src={telegram} alt="" className="w-5" /><span className="text-sm md:block hidden">Telegram</span></div>
            
          </div>
          </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-between gap-10 w-[100%] md:w-[80%]">
               <div className="flex flex-col gap-4">
                 <p className="font-semibold text-sm">Getting started</p>
                 <div className="flex flex-col gap-2 text-sm text-[#4b5563]">
                    <span className="transition-all hover:text-black cursor-pointer">Release Notes</span>
                    <span className="transition-all hover:text-black cursor-pointer">Upgrade Guide</span>
                    <span className="transition-all hover:text-black cursor-pointer">Browser Support</span>
                    <span className="transition-all hover:text-black cursor-pointer">Dark Mode</span>
                 </div>
               </div>

               <div className="flex flex-col gap-4">
                 <p className="font-semibold text-sm">Explore</p>
                 <div className="flex flex-col gap-2 text-sm text-[#4b5563]">
                    <span className="transition-all hover:text-black cursor-pointer">Prototyping</span>
                    <span className="transition-all hover:text-black cursor-pointer">Design systems</span>
                    <span className="transition-all hover:text-black cursor-pointer">Pricing</span>
                    <span className="transition-all hover:text-black cursor-pointer">Security</span>
                 </div>
               </div>

               <div className="flex flex-col gap-4">
                 <p className="font-semibold text-sm">Resources</p>
                 <div className="flex flex-col gap-2 text-sm text-[#4b5563]">
                    <span className="transition-all hover:text-black cursor-pointer">Best practices</span>
                    <span className="transition-all hover:text-black cursor-pointer">Support</span>
                    <span className="transition-all hover:text-black cursor-pointer">Developers</span>
                    <span className="transition-all hover:text-black cursor-pointer">Learn design</span>
                 </div>
               </div>

               <div className="flex flex-col gap-4">
                 <p className="font-semibold text-sm">Community</p>
                 <div className="flex flex-col gap-2 text-sm text-[#4b5563]">
                    <span className="transition-all hover:text-black cursor-pointer">Discussion Forums</span>
                    <span className="transition-all hover:text-black cursor-pointer">Code of Conduct</span>
                    <span className="transition-all hover:text-black cursor-pointer">Contributing</span>
                    <span className="transition-all hover:text-black cursor-pointer">API Reference</span>
                 </div>
               </div>

           </div>
         </div>
   );
};

export default Footer;
