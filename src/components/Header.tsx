import { useEffect, useState } from "react";
import icon1 from '../images/icon1.png'
import { Link } from "react-router-dom";
import { type InjectedViewportProps } from "react-in-viewport";
import { v4 as uuidv4} from 'uuid';


const Header = ({forwardedRef, inViewport}: InjectedViewportProps<HTMLDivElement>) : React.ReactElement => {
   const [toggleMenu, setToggleMenu] = useState<boolean>(false);
   const [key, setKey] = useState<string>('');
   const [viewportAnimate, setViewportAnimate] = useState<boolean>(false);

   const barStyle = 'w-5 h-[3px] bg-black mt-1 transition-transform';
   const barStyle1 = 'w-5 h-[3px] bg-black mt-[6px] transition-transform rotate-[135deg] translate-y-[4px]';
   const barStyle2 = 'transition-opacity opacity-0';
   const barStyle3 = 'w-5 h-[3px] bg-black mt-[6px] transition-transform -rotate-[135deg] -translate-y-[5px]';

   const resetAnimation = () => {
      setKey(uuidv4());
   }

   useEffect(()=>{
      if(inViewport){
         setTimeout(()=> setViewportAnimate(true), 0)
      }else{
         setViewportAnimate(false)
      }
   },[inViewport])
   
   return(
      <div key={key} id='header' className={`mb-5 flex flex-col`} ref={forwardedRef}>

         {/* Top Header */}
         <div className={`${inViewport && 'animate-fade-in-left'} flex bg-indigo-800 text-slate-300 items-center justify-center sm:justify-between text-[12px] sm:text-sm md:text-base py-1 px-4 md:px-6 lg:px-10`}>
            <span className="text-center block sm:hidden">Welcome to Ibrahim Bin Jibreen Contracting Co.</span>
            <span className="hidden sm:block">Welcome to Ibrahim Bin Jibreen Cont. Co.</span>
            <span className="hidden sm:flex duration-200 p-2 rounded-lg hover:bg-black gap-x-1 cursor-pointer">
               <img alt='whatsapp logo' src={icon1} width={'25px'} className="invert"/>
               <span>+966 566 601 295</span>
            </span>
         </div>

         <div className={`${inViewport && 'animate-fade-in-top'} flex items-center justify-around py-3 px-4 md:px-6 lg:px-10`}>
            {/* IBJ Logo */}
            <Link to='/' className="flex flex-col cursor-pointer font-serif text-center text-indigo-800" onClick={resetAnimation} >
               <span className="text-4xl md:text-[41px] lg:text-7xl min-w-24 cursor-pointer">I B J</span>
               <span className="lg:text-[20px]">شركة إبراهيم بن جبرين للمقاولات</span>
            </Link>

            {/* Menu for large screens */}
            <ul className="hidden sm:flex items-center list-none tracking-wide md:gap-x-3 lg:gap-x-6 text-[10px] sm:text-[12px] md:text-[15px] lg:text-[17px] text-center text-nowrap">
               <li><Link to='/' className="rounded-sm cursor-pointer border-2 p-2 border-transparent duration-200 hover:border-b-indigo-700 hover:opacity-80" onClick={resetAnimation}>HOME</Link></li>
               <li><Link to='/about-us' className="rounded-sm cursor-pointer border-2 p-2 border-transparent duration-200 hover:border-b-indigo-700 hover:opacity-80" onClick={resetAnimation}>ABOUT US</Link></li>
               <li><Link to='/services' className="rounded-sm cursor-pointer border-2 p-2 border-transparent duration-200 hover:border-b-indigo-700 hover:opacity-80" onClick={resetAnimation}>OUR SERVICES</Link></li>
               <li><Link to='/projects' className="rounded-sm cursor-pointer border-2 p-2 border-transparent duration-200 hover:border-b-indigo-700 hover:opacity-80" onClick={resetAnimation}>OUR PROJECTS</Link></li>
               <li><Link to='/contact-us' className="rounded-md cursor-pointer border-2 p-2 duration-200 hover:border-indigo-700 hover:bg-slate-200 hover:opacity-80" onClick={resetAnimation}>CONTACT US</Link></li>
            </ul>

            {/* Menu for small screens */}
            <div className="inline-block sm:hidden transition-transform cursor-pointer" onClick={()=>setToggleMenu(!toggleMenu)}>
               <div className={toggleMenu ? barStyle1: barStyle}></div>
               <div className={toggleMenu ? barStyle2: barStyle}></div>
               <div className={toggleMenu ? barStyle3: barStyle}></div>
            </div>
         </div>   
      </div>
   )

}

export default Header;