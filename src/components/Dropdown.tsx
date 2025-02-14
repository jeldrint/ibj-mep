import { Link } from "react-router-dom";
import { ToggleDropDownProps } from "./sub-components/HeaderNav";

type DropdownProps = {
   toggleDropdown: ToggleDropDownProps,
   setToggleDropdown: React.Dispatch<React.SetStateAction<ToggleDropDownProps>>,
   newNavName: string,
   dropdownItems: string [],
}

const DropDown = ({toggleDropdown, setToggleDropdown, newNavName, dropdownItems}: DropdownProps) => {

      return(
         <div onMouseOver={()=>setToggleDropdown({...toggleDropdown, [newNavName]: true})} onMouseOut={()=>setToggleDropdown({...toggleDropdown, [newNavName]: false})} className={`${!toggleDropdown[newNavName as keyof typeof toggleDropdown] ? 'invisible' : 'visible' } absolute flex flex-col cursor-pointer text-left bg-red-400`}>
            {
               dropdownItems.map((item, idx)=>{
                  const path: string = item.replace(/\s+/g, '-').toLowerCase();
                  return <Link to={`/about-us/${path}`} key={idx}>{item}</Link>
               })
            }
         </div>
      )   
   }

export default DropDown;