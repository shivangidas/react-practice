import { useLoaderData } from "react-router-dom";
import Post from "./post";
import classes from "./postlist.module.css";

type Post = {
    author: string;
    body: string;
    id: string
}
function PostList() {
    const posts = useLoaderData() as unknown as Post[];

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
