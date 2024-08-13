import classes from './post.module.css';

function Post(props: { author: string, body: string }) {
    return (
        <li>
            <div className={classes.post}>
                <div className={classes.author}>{props.author}</div>
                <div className={classes.text}> {props.body}</div>
            </div>
        </li>
    )

}
export default Post