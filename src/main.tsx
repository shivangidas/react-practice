import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Posts, { loader as postsLoader } from "./routes/Posts.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost, { action as NewPostAction } from "./routes/newPost.tsx";
import RootLayout from "./routes/RootLayout.tsx";

const router = createBrowserRouter([
  {
    path: "/react-practice",
    element: <RootLayout />,
    children: [
      {
        path: "/react-practice",
        element: <Posts />,
        loader: postsLoader,
        children: [
          {
            path: "/react-practice/create-post",
            element: <NewPost />,
            action: NewPostAction,
          },
        ],
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
