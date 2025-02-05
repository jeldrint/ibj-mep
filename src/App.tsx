import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import handleViewport from "react-in-viewport";

const ViewportHeader = handleViewport(Header);

const App = (): React.ReactElement => {

   return (
      <div className="min-h-screen max-w-screen font-poppins bg-slate-100">
      <div className="h-full w-full flex flex-col">
         <ViewportHeader />
         <Outlet />
      </div>
      </div>
   )
}



export default App;