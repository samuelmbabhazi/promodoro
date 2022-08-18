import React, { Component } from "react";

export default class SessionTime extends Component {
  handleSessionIncre = () => {
    this.props.incrementSession();
  };
  handleSessiondecre = () => {
    this.props.decrementSession();
  };
  render() {
    return (
      <div className="session">
        <h5>SessionLength</h5>
        <div>
          <button onClick={this.handleSessionIncre}>
            <img src="up.svg" alt="" width={10} />
          </button>
          <span>{this.props.sessionTime}</span>
          <button onClick={this.handleSessiondecre}>
            <img src="down.svg" alt="" width={10} />
          </button>
        </div>
      </div>
    );
  }
}
