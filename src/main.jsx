import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";



import CartPage from './components/CartPage.jsx';




// Define the router configuration
const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
 
  
  
  {
    path: "/cart",
    element: <CartPage />,
  },
  
  
]);

// Render the application
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);