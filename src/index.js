import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Exchange from './Exchange';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/exchange/:exchangeId",
    element: <Exchange />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);


