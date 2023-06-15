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
import AddaClass from "../pages/Dashboard/AddAClass/AddaClass";
import InstClasses from "../pages/Dashboard/instructorClassis/instClasses";
import InstructorHome from "../pages/Dashboard/InstractorHome/InstractorHome";
import UpdateClass from "../pages/Dashboard/UpdateClass";
import Payment from "../pages/Dashboard/Payment/Payment";
import Enrolled from "../pages/Dashboard/Enrolled/Enrolled";
import History from "../pages/Dashboard/History/History";
import StudentHome from "../pages/Dashboard/StudentHome/StudentHome";


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
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path: 'myclasses',
          element: <MyClasses></MyClasses>
        },
        {
          path: 'manageusers',
          element: <ManageUsers></ManageUsers>
        },
        {
          path: 'addaclass',
          element: <AddaClass></AddaClass>
        },
        {
          path: 'instclasses',
          element: <InstClasses></InstClasses>
        },
        {
          path: 'update/:id',
          element: <UpdateClass></UpdateClass>,
          loader: ({params})=> fetch(`https://creative-artistry-server-saidur-way.vercel.app/classes/update/${params.id}`)
        },
        {
          path: 'instructorHome',
          element: <InstructorHome></InstructorHome>
        },
        {
          path: 'payment/:id',
          element: <Payment></Payment>,
          loader: ({params}) => fetch(`https://creative-artistry-server-saidur-way.vercel.app/myclasses/payment/${params.id}`)
        },
        {
          path: 'paymenthistory',
          element: <History></History>
        },
        {
          path: 'enrolled',
          element: <Enrolled></Enrolled>
        },
        {
          path: 'studenthome',
          element: <StudentHome></StudentHome>
        }
        

      ]
     }
   ]);
   export default router;