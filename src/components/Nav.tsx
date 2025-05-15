import { useRef } from "react";
import icon1 from '../images/icon1.png'
import ibjLogo from '../images/ibjLogo.png'
import useInViewport from "../useInViewport";
import NavItems from "./sub-components/NavItems";
import { DisplayPDFProps } from "../types";

const Nav = ({displayPdf, setDisplayPdf}:DisplayPDFProps) : React.ReactElement => {
   const ref = useRef<HTMLDivElement | null>(null);
   const isInViewport = useInViewport(ref);

   console.log(displayPdf)

   return(
      <div ref={ref} className={`flex flex-col`} >
         {/* Top Nav */}
         <div className={`${isInViewport ? 'animate-in duration-1.5s fade-in-5 spin-in-6 duration-500' : 'invisible'} flex items-center justify-center sm:justify-between bg-indigo-800 text-slate-300 text-[12px] sm:text-sm md:text-base py-1 px-4 md:px-6 lg:px-10`}>
            <span className="text-center block sm:hidden">Welcome to Ibrahim Bin Jibreen Contracting Co.</span>
            <span className="hidden sm:block">Welcome to Ibrahim Bin Jibreen Cont. Co.</span>
            <span className="hidden sm:flex duration-200 p-2 rounded-lg hover:bg-black gap-x-1 cursor-pointer">
               <img alt='whatsapp logo' src={icon1} width={'25px'} className="invert"/>
               <span>+966 566 601 295</span>
            </span>
         </div>


         <div className={`${isInViewport ? 'animate-in duration-1.5s delay-500 fade-in-5 slide-in-from-bottom-20' : 'invisible'} flex items-center justify-around py-1 px-4 md:px-6 lg:px-10`}>
            {/* IBJ Logo */}
            <a href='/' className="flex flex-col cursor-pointer font-serif text-center text-indigo-800">
               <img alt='IBJ logo' src={ibjLogo} width={'240px'} className="min-w-[150px]"/>
            </a>

            {/* Menu for large screens */}
            <div className="hidden sm:flex items-center tracking-wide md:gap-x-3 lg:gap-x-6 text-center text-nowrap sm:text-xs md:text-sm lg:text-base xl:text-lg">
               <NavItems navName='home' withDropdown={false} dropdownItems={[]} />
               <NavItems navName='about-us' withDropdown={true} dropdownItems={['Who we are','Key Personnel Profile','Manpower Status', 'Company Equipment List']} />
               <NavItems navName='our-services' withDropdown={true} dropdownItems={['Electro-mechanical Works','Pre-engineered Works']} />
               <NavItems navName='projects' withDropdown={false} dropdownItems={[]} />
               <div className='rounded-sm border-2 p-2 border-transparent hover:border-b-indigo-700 hover:opacity-80 cursor-pointer' onClick={()=>setDisplayPdf(true)}>VIEW COMPANY PROFILE</div>
               <NavItems navName='contact-us' withDropdown={false} dropdownItems={[]} />
            </div>
         </div>
      </div>
   )
}

export default Nav;