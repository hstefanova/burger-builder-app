import React, { Fragment } from "react";
import styles from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = ({ children, showModal, purchaseCanceled }) => (
  <Fragment>
    <Backdrop showModal={showModal} hideModal={purchaseCanceled} />
    <div
      className={styles.Modal}
      style={{
        transform: showModal ? "transformY(0)" : "transformY(-100vh)",
        opacity: showModal ? "1" : "0",
      }}
    >
      {children}
    </div>
  </Fragment>
);

export default Modal;
