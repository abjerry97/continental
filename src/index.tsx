import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/fonts/fonts.css" 
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Splash from "./pages/splash";
import { PageModalContextProvider } from "./context/PageModalProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Splash />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
root.render(
  <React.StrictMode>
    <PageModalContextProvider>
      <RouterProvider router={router} />
    </PageModalContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
