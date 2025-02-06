import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";

const App = (): React.ReactElement => {
   const [key, setKey] = useState<string>('');

   return (
      <div className="min-h-screen max-w-screen font-poppins bg-slate-100">
      <div className="h-full w-full flex flex-col">
         <Header key={key} setKey={setKey} />
         <Outlet context={[key, setKey]} />
      </div>
      </div>
   )
}



export default App;