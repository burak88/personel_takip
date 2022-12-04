import { createBrowserRouter } from "react-router-dom";
import RenderOnAuthenticated from "../components/Auth/RenderOnAuthenticated";
import Home from "../pages/Home";
import MyTask from "../pages/MyTask";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import Root from "./Root";
import React from 'react'

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path:"/",
        element: <RenderOnAuthenticated><Home /></RenderOnAuthenticated>

      },
      {
        path:"giris-yap",
        element: <SignIn/>
      },
      {
        path: "profilim",
        element: <RenderOnAuthenticated><Profile/></RenderOnAuthenticated>
      },
      {
        path: "islerim",
        element: <RenderOnAuthenticated><MyTask/></RenderOnAuthenticated>
      }
    ],
  },
]);
