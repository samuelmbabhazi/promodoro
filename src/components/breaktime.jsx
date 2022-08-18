import React, { Component } from "react";

export default class BreakTime extends Component {
  handleBreakIncre = () => {
    this.props.incrementBreak();
  };
  handleBreakdecre = () => {
    this.props.decrementBreak();
  };
  render() {
    return (
      <div>
      <h5>BreakLength</h5>
      <div>
        <button onClick={this.handleBreakIncre}>
          {" "}
          <img src="up.svg" alt="" width={10} />
        </button>
        <span>{this.props.breakTime}</span>
        <button onClick={this.handleBreakdecre}>
          {" "}
          <img src="down.svg" alt="" width={10} />
        </button>
      </div>
      </div>
    );
  }
}
