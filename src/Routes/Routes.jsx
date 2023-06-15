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
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);


