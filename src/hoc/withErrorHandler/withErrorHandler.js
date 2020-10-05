import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import axios from "axios";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };
    componentDidMount() {
      //clear the error after showing it
      axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });

      //when we have error from the server,
      //we set the error value to the state
      axios.interceptors.response.use(
        //   return response
        (res) => res,
        (error) => {
          this.setState({ error: error });
        }
      );
    }

    errorConfirmHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <>
          <Modal show={this.state.error} modalClosed={this.errorConfirmHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />;
        </>
      );
    }
  };
};

export default withErrorHandler;
