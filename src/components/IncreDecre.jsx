import React, { Component } from "react";
import SessionTime from "./Session";
import BreakTime from "./breaktime";

export default class IncreDecre extends Component {
  render() {
    return (
      <div className="incredecre">
        <SessionTime
          sessionTime={this.props.sessionTime}
          incrementSession={this.props.incrementSession}
          decrementSession={this.props.decrementSession}
        />
        <BreakTime
          breakTime={this.props.breakTime}
          incrementBreak={this.props.incrementBreak}
          decrementBreak={this.props.decrementBreak}
        />
      </div>
    );
  }
}
