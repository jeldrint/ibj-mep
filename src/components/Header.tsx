import { useState } from "react";


const Header = () : React.ReactElement => {
   const [toggleMenu, setToggleMenu] = useState(false);

   const barStyle = 'w-5 h-[3px] bg-black mt-1 transition-transform';
   const barStyle1 = 'w-5 h-[3px] bg-black mt-[6px] transition-transform rotate-[135deg] translate-y-[4px]';
   const barStyle2 = 'transition-opacity opacity-0';
   const barStyle3 = 'w-5 h-[3px] bg-black mt-[6px] transition-transform -rotate-[135deg] -translate-y-[5px]';

   return(
      <div className="flex flex-col">
         {/* Top Header */}
         <div className="bg-indigo-800 text-slate-300 flex items-center justify-center sm:justify-between text-[12px] sm:text-sm md:text-base py-3 px-4 md:px-6 lg:px-10">
            <span className="text-center block sm:hidden">Welcome to Ibrahim Bin Jibreen Contracting Co.</span>
            <span className="hidden sm:block">Welcome to Ibrahim Bin Jibreen Cont. Co.</span>
            <span className="hidden sm:block">0566601295</span>
         </div>

         <div className="flex items-center justify-around py-3 px-4 md:px-6 lg:px-10">
            {/* IBJ Logo */}
            <div className="flex flex-col cursor-pointer font-serif text-center text-indigo-800">
               <span className="text-4xl md:text-[41px] lg:text-7xl min-w-24 cursor-pointer">I B J</span>
               <span className="lg:text-[20px]">شركة إبراهيم بن جبرين للمقاولات</span>
            </div>

            {/* Menu for large screens */}
            <ul className="hidden sm:flex items-center list-none tracking-wide gap-x-2 md:gap-x-4 lg:gap-x-6 text-sm md:text-base lg:text-lg text-center">
               <li className="rounded-sm cursor-pointer border-2 p-2 border-transparent duration-200 hover:border-b-indigo-700 hover:opacity-80">HOME</li>
               <li className="rounded-sm cursor-pointer border-2 p-2 border-transparent duration-200 hover:border-b-indigo-700 hover:opacity-80">ABOUT US</li>
               <li className="rounded-sm cursor-pointer border-2 p-2 border-transparent duration-200 hover:border-b-indigo-700 hover:opacity-80">OUR SERVICES</li>
               <li className="rounded-sm cursor-pointer border-2 p-2 border-transparent duration-200 hover:border-b-indigo-700 hover:opacity-80">OUR PROJECTS</li>
               <li className="rounded-sm cursor-pointer border-2 p-2 duration-200 hover:border-indigo-700 hover:bg-slate-200 hover:opacity-80">CONTACT US</li>
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