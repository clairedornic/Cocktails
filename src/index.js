import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import Home from './Home';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cocktail from './Cocktail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cocktail/:cocktailId",
    element: <Cocktail />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);


