import React from "react";
import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import ToggleButton from "../../UI/Button/ToggleButton/ToggleButton";

const Toolbar = ({ clicked }) => (
  <header className={styles.Toolbar}>
    <ToggleButton clicked={clicked} />
    <div className={styles.logo}>
      <Logo />
    </div>
    <nav className={styles.nav}>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
