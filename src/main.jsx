import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'
import Shop from './components/Shop'
import Cart from './components/Cart'
import { productCartData } from './loaders/get-cart-product-data-storage'
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    loader:productCartData,
    children: [
      {
        path: '/',
        element:<Home/>
      },
      {
        path: "shop",
        element: <Shop />
      },
      {
        path: "cart",
        element: <Cart />
      },

      {
        path: 'about',
        element: <About />
      }
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
    <Toaster/>
  </>
)
