import { Link } from "react-router-dom";
import { ToggleDropDownProps } from "../../types";

type DropdownProps = {
   navName: string,
   toggleDropdown: ToggleDropDownProps,
   setToggleDropdown: React.Dispatch<React.SetStateAction<ToggleDropDownProps>>,
   newNavName: string,
   dropdownItems: string [],
}

const DropDown = ({navName, toggleDropdown, setToggleDropdown, newNavName, dropdownItems}: DropdownProps) => {

   if(screen.width > 640){
      return(
         <div onMouseEnter={()=>setToggleDropdown({...toggleDropdown, [newNavName]: true})} onMouseLeave={()=>setToggleDropdown({...toggleDropdown, [newNavName]: false})}
            className={`${!toggleDropdown[newNavName as keyof typeof toggleDropdown] ? 'invisible' : 'visible' } absolute z-10 p-3 rounded flex flex-col cursor-pointer text-right sm:text-left text-xs sm:text-base bg-slate-400 text-slate-50`}>
            {
               dropdownItems.map((item, idx)=>{
                  const path: string = item.replace(/\s+/g, '-').toLowerCase();
                  return <Link to={`/${navName}/${path}`} key={idx} reloadDocument={true} className="transition-colors hover:text-indigo-800">{item}</Link>
               })
            }
         </div>
      )

   // ** Dropdown for the smaller screens
   }else{
      return(
         <div className={`${!toggleDropdown[newNavName as keyof typeof toggleDropdown] ? 'hidden' : 'flex animate-in fade-in-5 slide-in-from-top-7' } flex-col duration-1000 pr-7 rounded cursor-pointer text-right text-xs bg-transparent text-slate-50`}>
            {
               dropdownItems.map((item, idx)=>{
                  const path: string = item.replace(/\s+/g, '-').toLowerCase();
                  return <Link to={`/${navName}/${path}`} key={idx} reloadDocument={true} className="transition-colors active:text-indigo-800">{item}</Link>
               })
            }
         </div>
      )      
   }
}

export default DropDown;