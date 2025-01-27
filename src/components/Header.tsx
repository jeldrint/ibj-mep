import { useState } from "react";


const Header = () : React.ReactElement => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const barStyle = 'w-5 h-[3px] bg-black mt-1 transition-transform';
  const barStyle1 = 'w-5 h-[3px] bg-black mt-[6px] transition-transform rotate-[135deg] translate-y-[4px]';
  const barStyle2 = 'transition-opacity opacity-0';
  const barStyle3 = 'w-5 h-[3px] bg-black mt-[6px] transition-transform -rotate-[135deg] -translate-y-[5px]';

  return(
    <div className="min-h-[15%] flex items-center justify-between md:justify-around p-5">
      <span className="font-serif text-indigo-800 text-4xl md:text-5xl lg:text-6xl min-w-24 cursor-pointer">I&ensp;B&ensp;J</span>

      {/* Menu for large screens */}
      <ul className="hidden sm:flex list-none gap-x-5 tracking-wide text-sm md:text-base lg:text-lg">
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
  )
}

export default Header;