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
            element: <Instructors></Instructors>
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
   ]);
   export default router;