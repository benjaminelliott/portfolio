import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Root } from "./routes/Root/Root";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";
import { Home } from "./routes/Home/Home";
import { About } from "./routes/About/About";
import { Projects } from "./routes/Projects/Projects";
import "./stylesheets/index.css";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "*",
        element: <Home />,
      },
      {
        path: "*about",
        element: <About />,
      },
      {
        path: "*projects",
        element: <Projects />,
      },
      {
        path: "*",
        element: <Navigate to="*" />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
