import React from "react";
import styles from "./ToggleButton.module.css";

const ToggleButton = ({ clicked }) => {
  return (
    <div className={styles.ToggleButton} onClick={clicked}>
      Menuu
    </div>
  );
};

export default ToggleButton;
