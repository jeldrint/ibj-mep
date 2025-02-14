import { Link, useOutletContext } from "react-router-dom";
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
   //const [toggleDropdown, setToggleDropdown] = useState<ToggleDropDownProps>({aboutus: false, ourservices: false});
   const {toggleDropdown, setToggleDropdown} = useOutletContext();
   let newNavName = navName.replace('-','')

   if(withDropdown){
      console.log(toggleDropdown)

      return(
         <div className="relative">
            <div className="flex items-center rounded-sm border-2 p-2 border-transparent duration-200 hover:border-b-indigo-700 hover:opacity-80 cursor-pointer">
               <Link to={`/${navName}`} reloadDocument={true} onMouseOut={()=>setToggleDropdown({...toggleDropdown, [newNavName]: false})}>{navName.replace(/-/g,' ').toUpperCase()}&ensp;</Link>
               <img alt='arrow-down' width='20px' src={arrowIcon} onMouseOver={()=>setToggleDropdown({...toggleDropdown, [newNavName]: true})} className="hover:animate-[spin_0.5s_ease-out]" />
            </div>
            <DropDown toggleDropdown={toggleDropdown} setToggleDropdown={setToggleDropdown} newNavName={newNavName} dropdownItems={dropdownItems} />
         </div>

      )
   }else{
      return <Link to='/' reloadDocument={true} className="rounded-sm cursor-pointer border-2 p-2 border-transparent duration-200 hover:border-b-indigo-700 hover:opacity-80">{navName.replace(/-/g,' ').toUpperCase()}</Link>
   }
}

export default HeaderNav;