import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Posts, { loader as postsLoader } from "./routes/Posts.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost, { action as NewPostAction } from "./routes/newPost.tsx";
import RootLayout from "./routes/RootLayout.tsx";
import PostDetails, {
  loader as postDetailsLoader,
} from "./routes/PostDetails.tsx";

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
            path: "create-post",
            element: <NewPost />,
            action: NewPostAction,
          },
          {
            path: ":id",
            element: <PostDetails />,
            loader: postDetailsLoader,
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
