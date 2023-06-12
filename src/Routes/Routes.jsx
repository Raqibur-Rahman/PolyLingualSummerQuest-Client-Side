import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AllClasses from "../Pages/AllClasses/AllClasses";
import AllInstructors from "../Pages/AllInstructors/AllInstructors";

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
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);


