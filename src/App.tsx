import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import NavSmall from "./components/NavSmall";
import { useState } from "react";
import MenuButton from "./components/MenuButton";
import PDFReader from "./components/PDFReader";
import { DisplayPDFProps } from "./types";

const App = (): React.ReactElement => {
   const [toggleMenu, setToggleMenu] = useState<boolean>(false);
   const [displayPdf, setDisplayPdf] = useState<boolean>(false);

   return (
      <div className="min-h-screen max-w-screen font-poppins bg-slate-200 flex flex-col justify-between overflow-hidden">
         <PDFReader displayPdf={displayPdf} setDisplayPdf={setDisplayPdf} />
         <MenuButton toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
         <NavSmall toggleMenu={toggleMenu} /> 
         <Nav displayPdf={displayPdf} setDisplayPdf={setDisplayPdf} />
         <Outlet context={{setDisplayPdf} satisfies DisplayPDFProps} />
         <Footer />
      </div> 
   )
}

export default App;