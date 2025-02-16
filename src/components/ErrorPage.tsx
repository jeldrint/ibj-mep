import Footer from "./Footer";
import Header from "./Header";
import pic2 from '../images/2.jpg'
import MenuButton from "./sub-components/MenuButton";
import NavSmall from "./NavSmall";
import { useState } from "react";

const ErrorPage = (): React.ReactElement => {
   const [toggleMenu, setToggleMenu] = useState<boolean>(false);
    
   return(
      <div className="min-h-screen max-w-screen font-poppins bg-slate-100 flex flex-col justify-between overflow-hidden">
         <MenuButton toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
         <NavSmall toggleMenu={toggleMenu} /> 
         <Header />
         <div className="w-full h-full">
            <section className={`relative h-[50vh] mb-10 md:mb-20 lg:mb-[150px] bg-cover bg-top lg:bg-[0%_20%] xl:bg-center w-full bg-blue-800 bg-blend-hard-light`} style={{backgroundImage: `url(${pic2})`}}>
               <div className={`absolute p-9 backdrop-blur-sm h-full w-full flex flex-col gap-y-2 items-center justify-center`}>
                  <span className='text-4xl sm:text-6xl text-indigo-800 bg-slate-100 p-2 rounded-md'>PAGE ERROR</span>
                  <span className='text-base lg:text-lg text-black text-center max-w-[900px] bg-slate-100 p-1 rounded-md'>This page is under maintenance. Please Contact Administrator</span>
               </div>
            </section>
         </div>
         <Footer />
      </div> 

    )
}

export default ErrorPage;