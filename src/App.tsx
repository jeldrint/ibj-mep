import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import Footer from "./components/Footer";

const App = (): React.ReactElement => {
   const [key, setKey] = useState<string>('');

   return (
      <div className="min-h-screen max-w-screen font-poppins bg-slate-100">
      <div className="h-full w-full flex flex-col justify-between">
         <Header key={key} setKey={setKey} />
         <Outlet context={[key]} />
         <Footer />
      </div>
      </div>
   )
}



export default App;