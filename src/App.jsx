import React from 'react'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  useRoutes,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";

import ErrorPage from "./error-page";

import Contact from "./routes/contact";
export default function AppRouter() {
  const router = useRoutes([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
    },
    {
      path: "contacts/:contactId",
      element: <Contact />,
    },
  ]);
  return router
}
 

