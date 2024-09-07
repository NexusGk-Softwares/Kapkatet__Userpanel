import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx'
import Checkout from './components/Checkout.jsx'


// Define the router configuration
const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
 
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/checkout",
    element:<Checkout/>
  },
 
]);

// Render the application
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);