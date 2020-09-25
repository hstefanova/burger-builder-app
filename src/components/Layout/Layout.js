import React from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";
import Burger from "../Burger/Burger";

const Layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>
      <BurgerBuilder />
    </main>
  </Aux>
);

export default Layout;
