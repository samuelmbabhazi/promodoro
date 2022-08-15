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
    );
  }
}
