import { useState } from "react";
import NewPost from "./newPost"
import Post from "./post"
import classes from "./postlist.module.css"

const posts = [{ author: "Shivangi", body: "this is fun" }, { author: "Shiv", body: "I need a nap" }]

function PostList() {
    const [textBody, setTextBody] = useState("");
    const [author, setAuthor] = useState("");

    function changeBodyHandler(event: { target: { value: string; }; }) {
        setTextBody(event.target.value);
    }
    function changeAuthorHandler(event: { target: { value: string; }; }) {
        setAuthor(event.target.value);
    }
    return (
        <>
            <NewPost onBodyChange={changeBodyHandler} onNameChange={changeAuthorHandler} />
            <ul className={classes.posts}>
                {posts.map(function (data) {
                    return (
                        <Post author={data.author} body={data.body} />
                    )
                })}
                <Post author={author} body={textBody} />
            </ul>
        </>

    )
}

export default PostList