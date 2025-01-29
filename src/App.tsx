import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="min-h-screen max-w-screen font-poppins bg-slate-100">
      <div className="h-full w-full flex flex-col">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

export default App;