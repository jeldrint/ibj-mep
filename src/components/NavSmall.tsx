import NavItems from "./sub-components/NavItems";


const NavSmall = ({toggleMenu}:{toggleMenu: boolean}) : React.ReactElement => {

   return(
      <div className={`z-10 fixed right-0 w-1/2 h-screen pt-[100px] bg-indigo-500 duration-1000 flex flex-col items-end justify-start tracking-wide text-center ${toggleMenu ? `animate-in slide-in-from-right-[320px]` : `invisible animate-out slide-out-to-right-[320px]`}`}>
         <NavItems navName='home' withDropdown={false} dropdownItems={[]} />
         <NavItems navName='about-us' withDropdown={true} dropdownItems={['WHO WE ARE','Key Personnel Profile','Consectetuer']} />
         <NavItems navName='our-services' withDropdown={true} dropdownItems={['Electro-mechanical Works','Pre-engineered Works']} />
         <NavItems navName='projects' withDropdown={false} dropdownItems={[]} />
         <NavItems navName='contact-us' withDropdown={false} dropdownItems={[]} />
      </div>

   )
}

export default NavSmall;