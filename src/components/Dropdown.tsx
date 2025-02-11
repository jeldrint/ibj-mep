import { Link } from "react-router-dom";
import { ToggleDropDownProps } from "../types";

type DropdownProps = {
   toggleDropdown: ToggleDropDownProps,
   setToggleDropdown: React.Dispatch<React.SetStateAction<ToggleDropDownProps>>,
   header: string,
   dropdownItems: string [],
}

const DropDown = ({toggleDropdown, setToggleDropdown, header, dropdownItems}: DropdownProps) => {

   if(header==='about'){
      return(
         <div className={`${!toggleDropdown.about ? 'invisible' : 'visible' } absolute flex flex-col cursor-pointer text-left bg-red-400`}>
            {
               dropdownItems.map((item, idx)=>{
                  const path: string = item.replace(/\s+/g, '-').toLowerCase();
                  return <a href={`/about-us/${path}`} key={idx} onMouseOver={()=>setToggleDropdown({...toggleDropdown, about: true})} onMouseOut={()=>setToggleDropdown({...toggleDropdown, about: false})}>{item}</a>
               })
            }
         </div>
      )   
   }else if(header==='services'){
      return(
         <ul className={`${!toggleDropdown.services ? 'invisible' : 'visible' } absolute flex flex-col cursor-pointer text-left bg-red-400`}>
            {
               dropdownItems.map((item, idx)=>{
                  return <Link to='/services' key={idx} onMouseOver={()=>setToggleDropdown({...toggleDropdown, services: true})} onMouseOut={()=>setToggleDropdown({...toggleDropdown, services: false})}>{item}</Link>
               })
            }
         </ul>
      )   
   }


}

export default DropDown;