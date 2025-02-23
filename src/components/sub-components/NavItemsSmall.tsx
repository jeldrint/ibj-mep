import { Link } from "react-router-dom";
import DropDown from "./Dropdown";
import { useState } from "react";
import arrowIcon from '../../images/icon2-arrow.png';
import { HeaderNavProps, ToggleDropDownProps } from "../../types";


const NavItemsSmall = ({navName, withDropdown, dropdownItems}: HeaderNavProps) : React.ReactElement => {
   const [toggleDropdown, setToggleDropdown] = useState<ToggleDropDownProps>({aboutus: false, ourservices: false});
   let newNavName: string = navName.replace('-','')

   const handleClick = () => {
      if(toggleDropdown[newNavName as keyof typeof toggleDropdown]){
         setToggleDropdown({...toggleDropdown, [newNavName]: false})
      }else{
         setToggleDropdown({...toggleDropdown, [newNavName]: true})
      }
   }
   console.log(toggleDropdown)

   if(withDropdown){
      return(
         <div>
            <div onMouseLeave={()=>setToggleDropdown({...toggleDropdown, [newNavName]: false})} className='text-sm flex items-start rounded-sm cursor-pointer border-2 p-2 border-transparent' >
               <Link to={`/${navName}`} reloadDocument={true}>{navName.replace(/-/g,' ').toUpperCase()}&ensp;</Link>
               <img alt='arrow-down' src={arrowIcon} onClick={handleClick} className="w-4 lg:w-5 hover:animate-[spin_0.5s_ease-in-out]" />
            </div>
            <DropDown navName={navName} toggleDropdown={toggleDropdown} setToggleDropdown={setToggleDropdown} newNavName={newNavName} dropdownItems={dropdownItems} />
         </div>

      )
   }else{
      return <Link to='/' reloadDocument={true} className={`rounded-sm cursor-pointer border-2 p-2 border-transparent text-sm`} >{navName.replace(/-/g,' ').toUpperCase()}</Link>
   }
}

export default NavItemsSmall;