import React from "react";
import BuildControls from "../BuildControls";
import styles from "./BuildControl.module.css";

const BuildControl = ({ label, added, removed, disabled }) => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{label}</div>
    <button className={styles.Less} onClick={removed} disabled={disabled}>
      -
    </button>
    <button className={styles.More} onClick={added}>
      +
    </button>
  </div>
);

export default BuildControl;
