import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="min-h-screen font-poppins">
      <div className="h-screen w-full flex flex-col">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

export default App;