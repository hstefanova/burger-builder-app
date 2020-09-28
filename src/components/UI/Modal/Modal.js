import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ children, show }) => (
  <div
    className={styles.Modal}
    style={{
      transform: show ? "transformY(0)" : "transformY(-100vh)",
      opacity: show ? "1" : "0",
    }}
  >
    {children}
  </div>
);

export default Modal;
