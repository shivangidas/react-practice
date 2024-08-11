import Post from "./post"
import classes from "./postlist.module.css"

const posts = [{ author: "Shivangi", body: "this is fun" }, { author: "Shiv", body: "I need a nap" }]

function PostList() {
    return (
        <ul className={classes.posts}>{posts.map(function (data) {
            return (
                <Post author={data.author} body={data.body} />
            )
        })}
        </ul>
    )
}

export default PostList