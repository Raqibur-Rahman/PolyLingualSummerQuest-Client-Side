import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AllClasses from "../Pages/AllClasses/AllClasses";
import AllInstructors from "../Pages/AllInstructors/AllInstructors";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import EnrolledClasses from "../Pages/Dashboard/EnrolledClasses/EnrolledClasses";
import Payment from "../Pages/Dashboard/Payment/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
      ,
      {
        path: '/allclasses',
        element: <AllClasses></AllClasses>
      }
      ,
      {
        path: '/allinstructors',
        element: <AllInstructors></AllInstructors>
      }
      ,
      {
        path: '/allclasses',
        element: <AllClasses></AllClasses>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
      ,
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ]


  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'mycart',
        element: <MyCart></MyCart>

      }
      ,
      {
        path: 'myenrolledclasses',
        element: <EnrolledClasses></EnrolledClasses>

      }
      ,
      {
        path: 'payment',
        element: <Payment></Payment>

      }
      ,
      {
        path: 'paymenthistory',
        element: <PaymentHistory></PaymentHistory>

      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);


