import React, { Component } from "react";

import "./App.css";
import Timer from "./components/Time";
import IncreDecre from "./components/IncreDecre";
import Play from "./components/play";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentTimeH: 25,
      currentTimeM: 60,
      cycle: "Session",
      sessionTime: 25,
      breakTime: 5,
      t: 0,
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

  start = () => {
    this.setState({
      currentTimeM:setInterval(() => {
        this.state.currentTimeM - 1 
      }, 1000),
    });
  };
  

  render() {
    return (
      <div className="main">
        <h1>Promodoro</h1>
        <Timer
          currentTimeH={this.state.sessionTime}
          currentTimeM={this.state.currentTimeM}
        />

        <Play start={this.start} />
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
