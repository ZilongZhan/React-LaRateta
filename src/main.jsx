import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Book, FindItemGame, Puzzle, TapAnimalGame } from "./components";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "book", element: <Book /> },
      { path: "find-item-game", element: <FindItemGame /> },
      { path: "tap-animal-game", element: <TapAnimalGame /> },
      { path: "puzzle", element: <Puzzle /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
