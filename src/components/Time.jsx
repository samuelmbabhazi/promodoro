import React, { Component } from "react";

export default class Timer extends Component {
  render() {
    return (
      <div className="time">
        {this.props.cycle}
        <div className="timer">
          <span className="count-down" onClick={this.timer}>
            {this.props.currentTimeH}:{this.props.currentTimeM}
          </span>
        </div>
      </div>
    );
  }
}
