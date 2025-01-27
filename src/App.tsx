import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <div className="min-h-screen font-lato">
      <div className="flex flex-col h-screen w-full">
        <Header />
        <HomePage />
        <Footer />
      </div>
    </div>
  )
}

export default App;