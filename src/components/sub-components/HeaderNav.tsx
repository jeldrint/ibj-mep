import { Link } from "react-router-dom";
import DropDown from "../Dropdown";
import { useState } from "react";
import arrowIcon from '../../images/icon2-arrow.png';

type HeaderNavProps = {
   navName: string;
   withDropdown: boolean;
   dropdownItems: string [];
}

export type ToggleDropDownProps = {
   aboutus: boolean,
   ourservices: boolean
}

const HeaderNav = ({navName, withDropdown, dropdownItems}: HeaderNavProps) : React.ReactElement => {
   const [toggleDropdown, setToggleDropdown] = useState<ToggleDropDownProps>({aboutus: false, ourservices: false});
   let newNavName = navName.replace('-','')

   if(withDropdown){
      console.log(toggleDropdown)
      return(
         <div>
            <Link to={`/${navName}`} reloadDocument={true} className="rounded-sm cursor-pointer border-2 p-2 border-transparent duration-200 hover:border-b-indigo-700 hover:opacity-80 flex items-center justify-end">{navName.replace(/-/g,' ').toUpperCase()}&ensp;
               <img alt='arrow-down' width='20px' onMouseOver={()=>setToggleDropdown({...toggleDropdown, [newNavName]: true})} onMouseOut={()=>setToggleDropdown({...toggleDropdown, [newNavName]: false})} className="hover:animate-[spin_0.5s_ease-out]" src={arrowIcon} />
            </Link>
            <DropDown toggleDropdown={toggleDropdown} setToggleDropdown={setToggleDropdown} newNavName={newNavName} dropdownItems={dropdownItems} />
         </div>
      )
   }else{
      return <Link to='/' reloadDocument={true} className="rounded-sm cursor-pointer border-2 p-2 border-transparent duration-200 hover:border-b-indigo-700 hover:opacity-80">{navName.replace(/-/g,' ').toUpperCase()}</Link>
   }
}

export default HeaderNav;