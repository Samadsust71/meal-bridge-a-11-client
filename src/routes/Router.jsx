
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AvailableFoods from "../pages/public/AvailableFoods";
import AddFood from "../pages/private/AddFood";
import PrivateRoute from "./PrivateRoute";
import ManageFood from "../pages/private/ManageFood";
import FoodRequest from "../pages/private/FoodRequest";
import ErrorPage from "../pages/error/ErrorPage";


const router = createBrowserRouter([
    {
      path:"/",
      element:<RootLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/available-foods',
            element:<AvailableFoods/>
        },
        {
            path:'/add-food',
            element: <PrivateRoute><AddFood/></PrivateRoute>
        },
        {
            path:'/manage-my-foods',
            element:<PrivateRoute><ManageFood/></PrivateRoute>
        },
        {
            path:'/my-food-request',
            element:<PrivateRoute><FoodRequest/></PrivateRoute>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/register',
            element:<Register/>
        }
      ]
    }
])

export default router