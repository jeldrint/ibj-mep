import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import NavSmall from "./components/sub-components/NavSmall";

export type ToggleDropDownProps = {
   aboutus: boolean,
   ourservices: boolean
}


const App = (): React.ReactElement => {

   return (
      <div className="min-h-screen max-w-screen font-poppins bg-slate-100 flex flex-col justify-between overflow-hidden">
         {/* <NavSmall /> */}
         <Header />
         <Outlet />
         <Footer />
      </div> 
   )
}



export default App;