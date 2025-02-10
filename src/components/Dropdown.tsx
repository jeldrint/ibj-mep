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
         <ul className={`${!toggleDropdown.about ? 'invisible' : 'visible' } list-none absolute cursor-pointer text-left bg-red-400`}>
            {
               dropdownItems.map((item, idx)=>{
                  return <li key={idx} onMouseOver={()=>setToggleDropdown({...toggleDropdown, about: true})} onMouseOut={()=>setToggleDropdown({...toggleDropdown, about: false})}>{item}</li>
               })
            }
         </ul>
      )   
   }else if(header==='services'){
      return(
         <ul className={`${!toggleDropdown.services ? 'invisible' : 'visible' } list-none absolute cursor-pointer text-left bg-red-400`}>
            {
               dropdownItems.map((item, idx)=>{
                  return <li key={idx} onMouseOver={()=>setToggleDropdown({...toggleDropdown, services: true})} onMouseOut={()=>setToggleDropdown({...toggleDropdown, services: false})}>{item}</li>
               })
            }
         </ul>
      )   
   }


}

export default DropDown;