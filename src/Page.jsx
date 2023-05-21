import React from "react";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Home /></>,
    },
    {
        path: "/gallery",
        element: <><Gallery /></>,
    },
    {
        path: "/contact",
        element: <><Contact /></>,
    },
    {
        path: "/register",
        element: <><Register /></>,
    },
    {
        path: "/login",
        element: <><Login /></>,
    },
    {
        path: "/about",
        element: <><About /></>,
    }
  ]);

function Page(){
    return (<RouterProvider router={router} />)
}

export default Page;