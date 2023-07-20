import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Root } from './routes/Root'
import { Home } from "./routes/Home"
import { About } from "./routes/About"
import { Portfolio } from "./routes/Portfolio"
import { Contact } from "./routes/Contact"
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home/homeId",
        element: <Home />
      },
      {
        path: "contacts/:aboutId",
        element: <About />
      },
      {
        path: "contacts/:portfolioId",
        element: <Portfolio />
      },
      {
        path: "contacts/:contactId",
        element: <Contact />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);