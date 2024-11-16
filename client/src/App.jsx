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
import CheckAuth from "./components/Common/Check-Auth";
import UnauthPage from "./pages/unauth-page";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = false;
  const user = null


  const router = createBrowserRouter([
    {
      path: "/auth",
      element: (
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <AuthLayout />
        </CheckAuth>
      ),
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
      element: (
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <AdminLayout />
        </CheckAuth>
      ),
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
      path: "shop",
      element: (
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <ShoppingLayout />
        </CheckAuth>
      ),
      children: [
        {
          path: "home",
          element: <ShoppingHome />,
        },
        {
          path: "listing",
          element: <ShoppingListing />,
        },
        {
          path: "checkout",
          element: <ShoppingCheckout />,
        },
        {
          path: "account",
          element: <ShoppingAccount />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/unauth-page",
      element: <UnauthPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
