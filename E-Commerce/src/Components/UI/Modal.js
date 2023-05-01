import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-40 bg-[#000000] opacity-75 "
      onClick={props.onClose}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 ">
      <div className="bg-white lg:w-[60rem] md:container animate-slide-down ">
        {props.children}
      </div>
    </div>
  );
};

const modalPlaceholderElement = document.getElementById("modalPlaceholder");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        modalPlaceholderElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        modalPlaceholderElement
      )}
    </>
  );
};

export default Modal;
