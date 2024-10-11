import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import HomePage from './HomePage.jsx'
import React from 'react'

const router = createBrowserRouter([
  {
    path : '/',
    element: <Layout />,
    children : [
      {
        path : '',
        element : <App />
      },
      {
        path : '/home',
        element : <HomePage />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
