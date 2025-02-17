import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import NavSmall from "./components/NavSmall";
import { useState } from "react";
import MenuButton from "./components/MenuButton";

const App = (): React.ReactElement => {
   const [toggleMenu, setToggleMenu] = useState<boolean>(false);

   return (
      <div className="min-h-screen max-w-screen font-poppins bg-slate-200 flex flex-col justify-between overflow-hidden">
         <MenuButton toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
         <NavSmall toggleMenu={toggleMenu} /> 
         <Nav />
         <Outlet />
         <Footer />
      </div> 
   )
}



export default App;