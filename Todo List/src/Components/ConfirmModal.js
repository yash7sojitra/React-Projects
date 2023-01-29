import Modal from "../UI/Modal";
import classes from "./ConfirmModal.module.css";

const ConfirmModal = (props) => {
  return (
    <div className={classes.confirmModal}>
      <Modal onClose={props.onClose}>
        <div className={classes.confirmText}>
          Do you really want to delete all tasks?
        </div>
        <div className={classes.btns}>
          <button onClick={props.ondisprove} className={classes.noBtn}>
            No
          </button>
          <button onClick={props.onConfirm} className={classes.yesBtn}>
            Yes
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ConfirmModal;
