export type HeaderNavProps = {
   navName: string;
   withDropdown: boolean;
   dropdownItems: string [];
   displayToSmallNav?: boolean;
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
   img: any,
   desc1: string,
   desc2?: string
}

export type DisplayPDFProps = {
   displayPdf?: boolean,
   setDisplayPdf: React.Dispatch<React.SetStateAction<boolean>>
};