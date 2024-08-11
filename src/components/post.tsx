import classes from './post.module.css';

function Post(props: { author: string, body: string }) {
    return (
        <li>
            <div className={classes.post}>
                <div className='author'>{props.author}</div>
                <div className='text'> {props.body}</div>
            </div>
        </li>
    )

}
export default Post