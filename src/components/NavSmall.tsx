import NavItemsSmall from "./sub-components/NavItemsSmall";


const NavSmall = ({toggleMenu}:{toggleMenu: boolean}) : React.ReactElement => {

   return(
      <div className={`z-10 fixed right-0 w-1/2 h-screen pt-[100px] bg-indigo-500 duration-1000 animate-in slide-in-from-right-40 flex flex-col items-end justify-start tracking-wide text-center ${toggleMenu ? 'animate-in slide-in-from-right-[300px]' : 'invisible animate-out slide-out-to-right-[300px]'}`}>
         <NavItemsSmall navName='home' withDropdown={false} dropdownItems={[]} />
         <NavItemsSmall navName='about-us' withDropdown={true} dropdownItems={['WHO WE ARE','Odor amet','Consectetuer']} />
         <NavItemsSmall navName='our-services' withDropdown={true} dropdownItems={['Electro-mechanical Works','Pre-engineered Works']} />
         <NavItemsSmall navName='projects' withDropdown={false} dropdownItems={[]} />
         <NavItemsSmall navName='contact-us' withDropdown={false} dropdownItems={[]} />
      </div>

   )
}

export default NavSmall;