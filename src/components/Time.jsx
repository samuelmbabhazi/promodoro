import React, { Component } from "react";

export default class Timer extends Component {

  render() {
    return (
      <div className="time">
        <span className="count-down" onClick={this.timer}>
          {this.props.currentTimeH}:{this.props.currentTimeM}
        </span>
        <span>{this.props.cycle}</span>
      </div>
    );
  }
}
