import React, { Component, Fragment } from "react";
import styles from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  // Prevent unnecessary rendering of OrderSummary component.
  // It's not visible, so there is no point of re-rendering the component.

  shouldComponentUpdate(nextProps, nextState) {
    // The Modal component is changed when show property is updated
    //But we need to hide the Modal, when the loading is set to TRUE
    // That's why we check the children ( all properties)
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    const { children, show, modalClosed } = this.props;

    let attachedClasses = [styles.Modal, styles.Hidden];
    if (show) {
      attachedClasses = [styles.Modal];
    }

    return (
      <Fragment>
        <Backdrop show={show} clicked={modalClosed} />

        <div
          className={attachedClasses.join(" ")}
          style={{
            transform: show ? "transformY(0)" : "transformY(-100vh)",
            opacity: show ? "1" : "0",
          }}
        >
          {children}
        </div>
      </Fragment>
    );
  }
}

export default Modal;
