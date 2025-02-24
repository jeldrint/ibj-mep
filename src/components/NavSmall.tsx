import NavItemsSmall from "./sub-components/NavItemsSmall";


const NavSmall = ({toggleMenu}:{toggleMenu: boolean}) : React.ReactElement => {

   return(
      <div className={`z-10 fixed right-0 w-1/2 h-screen pt-[100px] bg-indigo-500 duration-1000 flex flex-col items-end justify-start gap-y-3 tracking-wide text-center ${toggleMenu ? 'visible animate-in slide-in-from-right-full' : 'invisible animate-out slide-out-to-right-full'}`}>
         <NavItemsSmall navName='home' withDropdown={false} dropdownItems={[]} />
         <NavItemsSmall navName='about-us' withDropdown={true} dropdownItems={['WHO WE ARE','Key Personnel Profile','Manpower Status']} />
         <NavItemsSmall navName='our-services' withDropdown={true} dropdownItems={['Electro-mechanical Works','Pre-engineered Works']} />
         <NavItemsSmall navName='projects' withDropdown={false} dropdownItems={[]} />
         <NavItemsSmall navName='contact-us' withDropdown={false} dropdownItems={[]} />
      </div>

   )
}

export default NavSmall;