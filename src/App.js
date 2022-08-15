import React, { Component } from "react";
import "./App.css";
import Timer from "./components/Time";
import IncreDecre from "./components/IncreDecre";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: "25 : 00",
      cycle: "Session",
      sessionTime: 25,
      breakTime: 5,
    };
  }
  incrementSession = () => {
    this.setState({
      sessionTime: this.state.sessionTime + 1,
    });
  };
  decrementSession = () => {
    this.setState({
      sessionTime: this.state.sessionTime - 1,
    });
  };
  incrementBreak = () => {
    this.setState({
      breakTime: this.state.breakTime + 1,
    });
  };
  decrementBreak = () => {
    this.setState({
      breakTime: this.state.breakTime - 1,
    });
  };
  render() {
    return (
      <div className="main">
        <h1>Promodoro</h1>
        <Timer currentTime={this.state.currentTime} />
        <IncreDecre
          sessionTime={this.state.sessionTime}
          breakTime={this.state.breakTime}
          incrementSession={this.incrementSession}
          decrementSession={this.decrementSession}
          incrementBreak={this.incrementBreak}
          decrementBreak={this.decrementBreak}
        />
      </div>
    );
  }
}

export default App;
