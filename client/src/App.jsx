import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/register";
import AdminLayout from "./components/Admin-View/layout";
import AdminDashboard from "./pages/Admin-View/Dashboard";
import AdminFeatures from "./pages/Admin-View/Features";
import AdminOrder from "./pages/Admin-View/Order";
import AdminProducts from "./pages/Admin-View/Products";
import NotFound from "./pages/Not-Found";
import ShoppingLayout from "./components/Shopping-View/layout";
import ShoppingAccount from "./pages/Shopping-View/Account";
import ShoppingCheckout from "./pages/Shopping-View/Checkout";
import ShoppingHome from "./pages/Shopping-View/Home";
import ShoppingListing from "./pages/Shopping-View/Listing";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "dashboard",
          element: <AdminDashboard />,
        },
        {
          path: "features",
          element: <AdminFeatures />,
        },
        {
          path: "order",
          element: <AdminOrder />,
        },
        {
          path: "products",
          element: <AdminProducts />,
        },
      ],
    },
    {
      path: "Shop",
      element: <ShoppingLayout />,
      children: [
        {
          path: "Home",
          element: <ShoppingHome />,
        },
        {
          path: "Listing",
          element: <ShoppingListing />,
        },
        {
          path: "Checkout",
          element: <ShoppingCheckout />,
        },
        {
          path: "Account",
          element: <ShoppingAccount />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
