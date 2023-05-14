import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/error";
import Root from "./components/root";
import Home from "./components/home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [{ path: "/home", element: <Home /> }],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
