import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Modal(props: any) {
  const navigate = useNavigate();
  function closeHandler() {
    navigate("..");
  }
  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler}></div>
      <dialog open className={classes.modal}>
        {props.children}
      </dialog>
    </>
  );
}

export default Modal;
