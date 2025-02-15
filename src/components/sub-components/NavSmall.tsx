import HeaderNavSmall from "./HeaderNavSmall";


const NavSmall = () : React.ReactElement => {
   return(
      <div className="absolute right-0 w-1/2 h-screen flex flex-col items-end justify-center tracking-wide text-center">
         <HeaderNavSmall navName='home' withDropdown={false} dropdownItems={[]} />
         <HeaderNavSmall navName='about-us' withDropdown={true} dropdownItems={['WHO WE ARE','Odor amet','Consectetuer']} />
         <HeaderNavSmall navName='our-services' withDropdown={true} dropdownItems={['Electro-mechanical Works','Pre-engineered Works']} />
         <HeaderNavSmall navName='projects' withDropdown={false} dropdownItems={[]} />
         <HeaderNavSmall navName='contact-us' withDropdown={false} dropdownItems={[]} />
      </div>

   )
}

export default NavSmall;