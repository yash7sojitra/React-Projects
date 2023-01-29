import ReactDOM from "react-dom";
import classes from "./ErrorTask.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const ErrorMsg = () => {
  return (
    <div className={classes.errorMsg}>
      <FontAwesomeIcon icon={faTriangleExclamation} />
      <span>Enter your task</span>
    </div>
  );
};

const portalElement = document.getElementById("enterTask");

const ErrorTask = () => {
  return <>{ReactDOM.createPortal(<ErrorMsg />, portalElement)}</>;
};

export default ErrorTask;
