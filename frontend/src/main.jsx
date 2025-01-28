import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home.jsx";

import Contact from "./routes/Contact.jsx";

import SignIn from "./routes/SignIn.jsx";

import Register from "./routes/Register.jsx";

import FormPark from "./routes/FormPark.jsx";

import Admin from "./routes/Admin.jsx";

import Edit from "./routes/Edit.jsx";

import Pay from "./routes/Pay.jsx";

import { ParkContextProvider } from "./context/park.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/signIN",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/park/form",
        element: <FormPark />,
      },
      {
        path: "/pay",
        element: <Pay />,
      },
      {
        path: "/admin/:id",
        element: <Admin />,
      },
      {
        path: "/edit/:id",
        element: <Edit />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ParkContextProvider>
      <RouterProvider router={router} />
    </ParkContextProvider>
  </StrictMode>
);
