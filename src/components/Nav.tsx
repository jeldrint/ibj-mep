import { useRef } from "react";
import icon1 from '../images/icon1.png'
import useInViewport from "../useInViewport";
import NavItems from "./sub-components/NavItems";


const Header = () : React.ReactElement => {
   const ref = useRef<HTMLDivElement | null>(null);
   const isInViewport = useInViewport(ref);
   
   return(
      <div ref={ref} className={`mb-5 md:mb-7 lg:mb-9 flex flex-col`} >
         {/* Top Header */}
         <div className={`${isInViewport ? 'animate-in spin-in-6 duration-500' : 'invisible'} flex bg-indigo-800 text-slate-300 items-center justify-center sm:justify-between text-[12px] sm:text-sm md:text-base py-1 px-4 md:px-6 lg:px-10`}>
            <span className="text-center block sm:hidden">Welcome to Ibrahim Bin Jibreen Contracting Co.</span>
            <span className="hidden sm:block">Welcome to Ibrahim Bin Jibreen Cont. Co.</span>
            <span className="hidden sm:flex duration-200 p-2 rounded-lg hover:bg-black gap-x-1 cursor-pointer">
               <img alt='whatsapp logo' src={icon1} width={'25px'} className="invert"/>
               <span>+966 566 601 295</span>
            </span>
         </div>

         <div className={`${isInViewport ? 'animate-in duration-1.5s delay-500 fade-in-5 slide-in-from-bottom-20' : 'invisible'} flex items-center justify-around py-3 px-4 md:px-6 lg:px-10`}>
            {/* IBJ Logo */}
            <a href='/' className="flex flex-col cursor-pointer font-serif text-center text-indigo-800">
               <span className="text-4xl md:text-[41px] lg:text-7xl min-w-24 cursor-pointer">I B J</span>
               <span className="lg:text-[20px]">شركة إبراهيم بن جبرين للمقاولات</span>
            </a>

            {/* Menu for large screens */}
            <div className="hidden sm:flex items-center list-none tracking-wide md:gap-x-3 lg:gap-x-6 text-[10px] sm:text-[12px] md:text-[15px] lg:text-[17px] text-center text-nowrap">
               <NavItems navName='home' withDropdown={false} dropdownItems={[]} />
               <NavItems navName='about-us' withDropdown={true} dropdownItems={['WHO WE ARE','Odor amet','Consectetuer']} />
               <NavItems navName='our-services' withDropdown={true} dropdownItems={['Electro-mechanical Works','Pre-engineered Works']} />
               <NavItems navName='projects' withDropdown={false} dropdownItems={[]} />
               <NavItems navName='contact-us' withDropdown={false} dropdownItems={[]} />
            </div>
         </div>   
      </div>
   )

}

export default Header;