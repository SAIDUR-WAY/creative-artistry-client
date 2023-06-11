import {
     createBrowserRouter,
     
   } from "react-router-dom";
   
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Classes from "../pages/Classes/Classes";
import Instructors from "../pages/Instructors/Instructors";
import Login from "../pages/LoginRegister/Login";
import Register from "../pages/LoginRegister/Register";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import Dashboard from "../layout/Dashboard";
import MyClasses from "../pages/Dashboard/MyClasses";
import ManageUsers from "../pages/Dashboard/ManageUsers";

   const router = createBrowserRouter([
     {
       path: "/",
       element: <MainLayout></MainLayout>,
       errorElement: <ErrorPage></ErrorPage>,
       children: [
          {
               path: '/',
               element: <Home></Home>
          },
          {
            path: '/classes',
            element: <Classes></Classes>
          },
          {
            path: '/instructors',
            element: <PrivateRoute><Instructors></Instructors></PrivateRoute>
          },
          {
            path: '/login',
            element: <Login></Login>
          },
          {
            path: '/register',
            element: <Register></Register>
          }
       ]
     },
     {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path: 'myclasses',
          element: <MyClasses></MyClasses>
        },
        {
          path: 'manageusers',
          element: <ManageUsers></ManageUsers>
        }
      ]
     }
   ]);
   export default router;