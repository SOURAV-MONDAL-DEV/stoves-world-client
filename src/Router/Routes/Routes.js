import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AllBuyers from "../../Pages/Dashbord/AdminDashbord/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashbord/AdminDashbord/AllSellers/AllSellers";
import MyOrders from "../../Pages/Dashbord/BuyerDashbord/MyOrders/MyOrders";
import Dashbord from "../../Pages/Dashbord/Dashbord/Dashbord";
import AddProduct from "../../Pages/Dashbord/SellerDashbord/AddProduct/AddProduct";
import MyProducts from "../../Pages/Dashbord/SellerDashbord/MyProducts/MyProducts";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Products from "../../Pages/Products/Products";
import SignUp from "../../Pages/SignUp/SignUp";
import NotFound from "../../Pages/NotFound/NotFound";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/products',
        element: <Products></Products>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }

    ]
  },
  {
    path: '/dashbord',
    element: <PrivateRoute><Dashbord></Dashbord></PrivateRoute>,
    children: [
      {
        path: '/dashbord/myOrders',
        element: <MyOrders></MyOrders>
      },

      {
        path: "/dashbord/addProduct",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/dashbord/myProducts",
        element: <MyProducts></MyProducts>
      },
      {
        path: "/dashbord/allSellers",
        element: <AllSellers></AllSellers>
      },
      {
        path: "/dashbord/allBuyers",
        element: <AllBuyers></AllBuyers>
      },
    ]
  },
  {
    path: '*',
    element: <NotFound></NotFound>
  }
]);

export default router;