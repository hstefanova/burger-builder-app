import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";
import Burger from "../Burger/Burger";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import styles from "./Layout.module.css";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer />
        <main className={styles.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
