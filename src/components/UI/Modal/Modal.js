import React, { Fragment } from "react";
import styles from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = ({ children, show, hide }) => (
  <Fragment>
    <Backdrop show={show} hide={hide} />
    <div
      className={styles.Modal}
      style={{
        transform: show ? "transformY(0)" : "transformY(-100vh)",
        opacity: show ? "1" : "0",
      }}
    >
      {children}
    </div>
  </Fragment>
);

export default Modal;
