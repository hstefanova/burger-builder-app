import React from "react";
import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = () => (
  <header className={styles.Toolbar}>
    <div>Menu</div>
    <div className={styles.logo}>
      <Logo />
    </div>
    <nav className={styles.nav}>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
