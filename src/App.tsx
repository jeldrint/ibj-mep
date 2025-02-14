import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

export type ToggleDropDownProps = {
   aboutus: boolean,
   ourservices: boolean
}


const App = (): React.ReactElement => {
   const [toggleDropdown, setToggleDropdown] = useState<ToggleDropDownProps>({aboutus: false, ourservices: false});

   return (
      <div className="min-h-screen max-w-screen font-poppins bg-slate-100 flex flex-col justify-between overflow-hidden">
         <Header />
         <Outlet context={{toggleDropdown, setToggleDropdown}} />
         <Footer />
      </div> 
   )
}



export default App;