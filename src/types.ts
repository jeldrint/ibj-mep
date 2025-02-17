export type HeaderNavProps = {
   navName: string;
   withDropdown: boolean;
   dropdownItems: string [];
}

export type ToggleMenuProps = {
   toggleMenu: boolean,
   setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export type ToggleDropDownProps = {
   aboutus: boolean,
   ourservices: boolean
}

export type PersonnelProps = {
   name: string,
   title: string,
   img: string,
   desc1: string,
   desc2?: string
}