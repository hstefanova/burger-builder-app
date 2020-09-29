import React from "react";
import styles from "./Backdrop.module.css";

const Backdrop = ({ showModal, hideModal }) =>
  showModal ? (
    <div className={styles.Backdrop} onClick={hideModal}></div>
  ) : null;

export default Backdrop;
