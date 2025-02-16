import HeaderNavSmall from "./sub-components/HeaderNavSmall";


const NavSmall = ({toggleMenu}:{toggleMenu: boolean}) : React.ReactElement => {

   return(
      <div className={`z-10 fixed right-0 w-1/2 h-screen pt-[100px] bg-indigo-500 duration-1000 animate-in slide-in-from-right-40 flex flex-col items-end justify-start tracking-wide text-center ${toggleMenu ? 'animate-in slide-in-from-right-[300px]' : 'invisible animate-out slide-out-to-right-[300px]'}`}>
         <HeaderNavSmall navName='home' withDropdown={false} dropdownItems={[]} />
         <HeaderNavSmall navName='about-us' withDropdown={true} dropdownItems={['WHO WE ARE','Odor amet','Consectetuer']} />
         <HeaderNavSmall navName='our-services' withDropdown={true} dropdownItems={['Electro-mechanical Works','Pre-engineered Works']} />
         <HeaderNavSmall navName='projects' withDropdown={false} dropdownItems={[]} />
         <HeaderNavSmall navName='contact-us' withDropdown={false} dropdownItems={[]} />
      </div>

   )
}

export default NavSmall;