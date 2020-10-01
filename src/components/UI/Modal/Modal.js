import React, { Component, Fragment } from "react";
import styles from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  // Prevent unnecessary rendering of OrderSummary component.
  // It's not visible, so there is no point of re-rendering the component.

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
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
// const Modal = ({ children, show, modalClosed }) => {};

export default Modal;
