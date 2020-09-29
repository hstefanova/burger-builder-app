import React, { Fragment } from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import styles from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = (props) => {
  return (
    <Fragment>
      {/* <Backdrop show /> */}
      <div className={styles.SideDrawer}>
        <nav className={styles.SideDrawerNav}>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  );
};

export default SideDrawer;
