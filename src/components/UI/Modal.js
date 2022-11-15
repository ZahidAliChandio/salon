import { Fragment } from "react";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 p-4  w-full h-screen bg-[rgba(0,0,0,0.75)] z-20"
      onClick={props.onClose}
    ></div>
  );
};
const LoginOverlay = (props) => {
  return (
    <div className="fixed top-[20vh] left-[50%] w-[95%] sm:w-4/5 md:w-9/12 lg:w-2/5 p-4 -translate-x-1/2 rounded-2xl bg-white accordian-shadow z-30">
      <div className="content">{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("login-overlay");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClick={props.onClose}>{props.children}</BackDrop>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <LoginOverlay>{props.children}</LoginOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
export default Modal;
