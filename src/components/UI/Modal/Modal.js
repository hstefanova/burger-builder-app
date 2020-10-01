import React, { Fragment } from "react";
import styles from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = ({ children, show, modalClosed }) => {
  let attachedClasses = [styles.Modal, styles.Hidden];

  if (show) {
    attachedClasses = [styles.Modal];
  }

  return (
    <Fragment>
      <Backdrop show={show} clicked={modalClosed} />

      <div
        className={attachedClasses.join(" ")}
        style={{
          transform: show ? "transformY(0)" : "transformY(-100vh)",
          opacity: show ? "1" : "0",
        }}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default Modal;
