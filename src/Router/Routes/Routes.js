import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Dashbord from "../../Pages/Dashbord/Dashbord/Dashbord";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import Products from "../../Pages/Products/Products";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
      path : '/',
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
          element:<Products></Products>
        },
        {
          path: '/blog',
          element:<Blog></Blog>
        },
        {
          path: '/addservice',
          element:<AddService></AddService>
        },
        {
          path: '/myreviews',
          element:<MyReview></MyReview>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        }
        // {
        //   path: 'services/:id',
        //   element: <ServiceDetails></ServiceDetails>,
        //   loader: ({params})=>fetch(`https://paint-service-server.vercel.app/services/${params.id}`)
        // }
      ]
    },
    {
      path:'/dashbord',
      element: <PrivateRoute><Dashbord></Dashbord></PrivateRoute>
    }
  ]);

  export default router;