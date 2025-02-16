import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavSmall from "./components/sub-components/NavSmall";
import { useState } from "react";

const App = (): React.ReactElement => {
   const [toggleMenu, setToggleMenu] = useState<boolean>(false);

   return (
      <div className="min-h-screen max-w-screen font-poppins bg-slate-100 flex flex-col justify-between overflow-hidden">
         { toggleMenu && <NavSmall /> }
         <Header />
         <Outlet context={toggleMenu} />
         <Footer />
      </div> 
   )
}



export default App;