import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavSmall from "./components/NavSmall";
import { useState } from "react";
import MenuButton from "./components/sub-components/MenuButton";

const App = (): React.ReactElement => {
   const [toggleMenu, setToggleMenu] = useState<boolean>(false);

   return (
      <div className="min-h-screen max-w-screen font-poppins bg-slate-100 flex flex-col justify-between overflow-hidden">
         <MenuButton toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
         <NavSmall toggleMenu={toggleMenu} /> 
         <Header />
         <Outlet />
         <Footer />
      </div> 
   )
}



export default App;