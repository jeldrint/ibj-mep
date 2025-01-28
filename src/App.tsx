import Header from "./components/Header";
import HomePage from "./components/HomePage";


const App = () => {
  return (
    <div className="min-h-screen font-poppins">
      <div className="h-screen w-full flex flex-col">
        <Header />
        <HomePage />
      </div>
    </div>
  )
}

export default App;