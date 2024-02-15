import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class Form extends Component {
  state = {
    name: "",
    password: "",
    error: false,
  };
  render() {
    const ValueUpdate = (e) => {
      e.preventDefault();
      console.log(this.state.name);
      if (this.state.name.length == 0) {
        this.setState({ error: true });
      }
    };
    console.log(this.state.name, this.state.password);
    return (
      <>
        <Container className="w-50">
          <form className="mx-auto" onSubmit={ValueUpdate}>
            <label htmlFor="">Username</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />

            {this.state.error & (this.state.name.length <= 0) ? (
              <p className="text-danger">Please Enter Details</p>
            ) : (
              <p className="text-success">{this.state.name}</p>
            )}
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            />
            {this.state.error & (this.state.password.length <= 0) ? (
              <p className="text-danger">Please Enter Details</p>
            ) : (
              <p className="text-success">{this.state.password}</p>
            )}
            <button
              type="submit"
              className="btn btn-success my-lg-2 d-flex mx-auto"
            >
              SIGNIN
            </button>
          </form>
        </Container>
      </>
    );
  }
}
