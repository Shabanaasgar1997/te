import React, { Component } from "react";

export default class Banner extends Component {
  state = {
    count: 1,
    name: "Shabana",
  };

  render() {
    const UpdateCount = () => {
      this.setState({ count: this.state.count + 1 });
    };
    const DeleteCount = () => {
      this.setState({
        count: this.state.count > 1 ? this.state.count - 1 : (Disabled = true),
      });
    };

    let Disabled = true;
    return (
      <>
        <div className="container">
          <h1 className="display-1">{this.state.count}</h1>
          <h1 className="display-1">{this.state.name}</h1>
          <button className="btn btn-success" onClick={() => UpdateCount()}>
            Add
          </button>
          <button
            className="btn btn-danger"
            onClick={() => DeleteCount()}
            disabled={false}
          >
            Delete
          </button>
        </div>
      </>
    );
  }
}
