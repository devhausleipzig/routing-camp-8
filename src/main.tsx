import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, About, Post, Posts, postsLoader, postLoader } from "./routes";
import { BlogLayout, RootLayout } from "./layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <BlogLayout />,
        children: [
          {
            index: true,
            element: <Posts />,
            loader: postsLoader,
          },
          {
            path: ":postId",
            element: <Post />,
            loader: postLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
