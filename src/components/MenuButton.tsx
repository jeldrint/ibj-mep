import { ToggleMenuProps } from "../types";

const MenuButton = ({toggleMenu, setToggleMenu}: ToggleMenuProps): React.ReactElement => {
   
   const barStyle = 'w-[21px] h-[2.5px] bg-indigo-800 my-[3.5px] transition-transform';
   const barStyle1 = 'w-[21px] h-[2.5px] bg-indigo-800 my-[5.1px] transition-transform rotate-[135deg] translate-y-[3.2px]';
   const barStyle2 = 'transition-opacity opacity-0';
   const barStyle3 = 'w-[21px] h-[2.5px] bg-indigo-800 my-[5.1px] transition-transform -rotate-[135deg] -translate-y-[4.2px]';

   return (
      <div className="z-20 fixed top-[45px] right-2 inline-block sm:hidden transition-transform cursor-pointer p-3 bg-indigo-500 rounded-full" onClick={()=>setToggleMenu(!toggleMenu)}>
         <div className={toggleMenu ? barStyle1: barStyle}></div>
         <div className={toggleMenu ? barStyle2: barStyle}></div>
         <div className={toggleMenu ? barStyle3: barStyle}></div>
      </div>
   )

}

export default MenuButton;