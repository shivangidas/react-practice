import { useLoaderData } from "react-router-dom";
import Post from "./post";
import classes from "./postlist.module.css";

function PostList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map(function (data) {
            return (
              <Post
                author={data.author}
                body={data.body}
                key={data.id}
                id={data.id}
              />
            );
          })}
        </ul>
      )}
      {posts.length === 0 && (
        <p style={{ color: "white", font: "bold" }}>There are no posts</p>
      )}
    </>
  );
}

export default PostList;
