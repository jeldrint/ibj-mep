import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const Router = () : React.ReactElement => {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
         { path: '/about-us', element: <About /> },
         { path: '/services', element: <Services /> },
         { path: '/projects', element: <Projects /> },
         { path: '/contact-us', element: <Contact /> },
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default Router;