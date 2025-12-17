import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "../Pages/Home";
import Roots from "../Pages/Roots";
import Login from "../Pages/Login";

import MyProfile from "../Pages/MyProfile";
import Error from "../Pages/Error";
 export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,

children:[
    {
        path:"",
        Component: Home,
     loader:()=>fetch("/public/Popular Skills.json"),
     children:[
      {
        
      }
     ]
    },
    {
      path:"/myProfile",
      Component: MyProfile,
    }
]

  },
  {
    path:"/login",
    Component: Login,
  },
  {
    path:"*",
    Component:Error,
  }
]);