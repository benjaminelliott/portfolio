import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { Root } from './routes/Root'
import { ErrorPage } from "./components/ErrorPage"
import { Home } from "./routes/Home"
import { About } from "./routes/About"
import { Skills } from "./routes/Skills"
import { Portfolio } from "./routes/Portfolio"
import { Contact } from "./routes/Contact"
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "skills",
        element: <Skills />
      },
      {
        path: "portfolio",
        element: <Portfolio />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "/*",
        element: <Navigate to="/" />
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);