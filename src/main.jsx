import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Root from "./Layout/Root"
import Four04Page  from './Components/Four04Page'
import Home from './Components/Home/Home'
import Products from './Components/Products/Products'
import DashBoard from './Components/DashBoard/DashBoard'
import Cart from './Components/Cart/Cart'
import WishList from './Components/WishList/WishList'
import Statistics from './Components/Statistics/Statistics'
import ContactUs from './Components/ContactUs/ContactUs'
import DetailsPage from './Components/DetailsPage/DetailsPage'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Four04Page ></Four04Page>,
    children: [

      {
        path:"/",
        element: <Home></Home>,
        children:[
          {
            path:'/',
            element: <Products></Products>,
            loader: () => fetch('/products.json')
          },
          {
            path:'products/:category',
            element: <Products></Products>,
            loader: () => fetch('/products.json')
          },
        ]
      },
      {
        path: "dashboard",
        element: <DashBoard></DashBoard>,
        children:[
          {
            path:"",
            element: <Navigate to="cart" replace></Navigate>
          },
          {
            path:"cart",
            element: <Cart></Cart>
          },
          {
            path:"wishlist",
            element: <WishList></WishList>
          }
        ]
      },
      {
        path:"statistics",
        element: <Statistics></Statistics>
      },
      {
        path:"contactUs",
        element: <ContactUs></ContactUs>
      },
      {
        path: 'product/:id',
        element:<DetailsPage></DetailsPage>,
        loader:() => fetch('/products.json')
      }
    ]}
  ])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
