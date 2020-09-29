import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, clicked, btnType }) => (
  <button
    onClick={clicked}
    className={[styles.Button, styles[btnType]].join(" ")}
  >
    {children}
  </button>
);

export default Button;
