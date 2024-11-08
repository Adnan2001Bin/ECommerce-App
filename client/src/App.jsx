import { useState } from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthLayout from './components/ui/auth/layout'
import Login from './pages/auth/Login'
import Register from './pages/auth/register'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AuthLayout />,
      children: [
        {
          path:'/Login',
          element:<Login />
        },
        {
          path:'/Register',
          element:<Register />
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
