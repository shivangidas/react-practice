import { Link } from "react-router-dom";
import classes from "./post.module.css";

function Post(props: { author: string; body: string; id: string }) {
  return (
    <li>
      <Link to={props.id}>
        <div className={classes.post}>
          <div className={classes.author}>{props.author}</div>
          <div className={classes.text}> {props.body}</div>
        </div>
      </Link>
    </li>
  );
}
export default Post;
