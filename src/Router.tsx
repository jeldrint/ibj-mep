import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import App from "./App";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import WhoWeAre from "./components/WhoWeAre";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import Personnel from "./components/Personnel";
import Manpower from "./components/Manpower";

const Router = () : React.ReactElement => {
   
   const router = createBrowserRouter([
      {
         path: '/',
         element: <App />,
         errorElement: <ErrorPage />,
         children: [
            { 
               path: '/about-us',
               element: <Outlet />,
               children: [
                  { index: true, element: <About /> },
                  { path: '/about-us/who-we-are', element: <WhoWeAre /> },
                  { path: '/about-us/key-personnel-profile', element: <Personnel /> },
                  { path: '/about-us/manpower-status', element: <Manpower /> },
               ]
            },
            { path: '/our-services', element: <Services /> },
            { path: '/projects', element: <Projects /> },
            { path: '/contact-us', element: <Contact /> },
         ]
      }
   ])

   return <RouterProvider router={router} />
}

export default Router;