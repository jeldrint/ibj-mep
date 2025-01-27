import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

const Router = () : React.ReactElement => {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />
    }
  ])

  return <RouterProvider router={router} />
}

export default Router;