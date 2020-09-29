import React from "react";
import styles from "./Backdrop.module.css";

const Backdrop = ({ show, hide }) =>
  show ? <div className={styles.Backdrop} onClick={hide}></div> : null;

export default Backdrop;
