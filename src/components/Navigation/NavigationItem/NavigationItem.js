import React from "react";
import styles from "./NavigationItem.module.css";

const NavigationItem = ({ children, link, active }) => (
  <li className={styles.NavigationItem}>
    <a href={link} className={active ? "active" : null}>
      {children}
    </a>
  </li>
);

export default NavigationItem;
