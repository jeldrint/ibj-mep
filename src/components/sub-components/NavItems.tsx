import { Link } from "react-router-dom";
import DropDown from "./Dropdown";
import { useState } from "react";
import arrowIcon from '../../images/icon2-arrow.png';
import { HeaderNavProps, ToggleDropDownProps } from "../../types";


const NavItems = ({navName, withDropdown, dropdownItems}: HeaderNavProps) : React.ReactElement => {
   const [toggleDropdown, setToggleDropdown] = useState<ToggleDropDownProps>({aboutus: false, ourservices: false});
   let newNavName: string = navName.replace('-','')

   if(withDropdown){
      return(
         <div className="relative">
            <div onMouseLeave={()=>setToggleDropdown({...toggleDropdown, [newNavName]: false})} className='flex items-center rounded-sm border-2 p-2 border-transparent duration-200 hover:border-b-indigo-700 hover:opacity-80 cursor-pointer' >
               <Link to={`/${navName}`} reloadDocument={true}>{navName.replace(/-/g,' ').toUpperCase()}&ensp;</Link>
               <img alt='arrow-down' src={arrowIcon} onMouseEnter={()=>setToggleDropdown({...toggleDropdown, [newNavName]: true})} className="w-4 lg:w-5 hover:animate-[spin_0.5s_ease-in-out]" />
            </div>
            <DropDown navName={navName} toggleDropdown={toggleDropdown} setToggleDropdown={setToggleDropdown} newNavName={newNavName} dropdownItems={dropdownItems} />
         </div>

      )
   }else{
      return <Link to={`/${navName}`} reloadDocument={true} className={`rounded-sm cursor-pointer border-2 p-2 border-transparent duration-200 hover:border-b-indigo-700 hover:opacity-80`} >{navName.replace(/-/g,' ').toUpperCase()}</Link>
   }
}

export default NavItems;