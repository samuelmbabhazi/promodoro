import React, { Component } from "react";
import "./App.css";
import Timer from "./components/Time";
import IncreDecre from "./components/IncreDecre";
import Play from "./components/play";

let interval;

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentTimeH: 25,
      currentTimeM: "00",
      cycle: "Session",
      sessionTime: 25,
      breakTime: 5,
    };
  }
  incrementSession = () => {
    this.setState({
      sessionTime: this.state.sessionTime + 1,
      currentTimeH: this.state.currentTimeH + 1,
    });
  };
  decrementSession = () => {
    if (this.state.sessionTime > 1) {
      this.setState({
        sessionTime: this.state.sessionTime - 1,
        currentTimeH: this.state.currentTimeH - 1,
      });
    }
  };
  incrementBreak = () => {
    this.setState({
      breakTime: this.state.breakTime + 1,
    });
  };
  decrementBreak = () => {
    if (this.state.breakTime > 1) {
      this.setState({
        breakTime: this.state.breakTime - 1,
      });
    }
  };

  start = () => {
    this.setState({
      currentTimeH: this.state.currentTimeH - 1,
      currentTimeM: 59,
    });
    interval = setInterval(() => {
      if (this.state.currentTimeH > 0) {
        if (this.state.currentTimeM > 0) {
          this.setState({
            currentTimeM: this.state.currentTimeM - 1,
          });
        }

        if (this.state.currentTimeM === 0) {
          this.setState({
            currentTimeH: this.state.currentTimeH - 1,
            currentTimeM: 59,
          });
        }
      }
      if (this.state.currentTimeH === 0 && this.state.currentTimeM > 0) {
        this.setState({
          currentTimeM: this.state.currentTimeM - 1,
        });
      }
      if (
        this.state.currentTimeH === 0 &&
        this.state.currentTimeM === 0 &&
        this.state.cycle !== "Break"
      ) {
        this.setState({
          cycle: "Break",
          currentTimeH: this.state.currentTimeH + this.state.breakTime - 1,
          currentTimeM: 59,
        });
      }
      if (this.state.cycle === "Break") {
      
        if (this.state.currentTimeH === 0 && this.state.currentTimeM === 0) {
          this.setState({
            cycle: "Session",
            currentTimeH: 25,
            currentTimeM: "00",
            sessionTime: 25,
            breakTime: 5,
          });
        }
      }

      if (this.state.currentTimeM < 10 && this.state.currentTimeM > 0) {
        this.setState({
          currentTimeM: "0" + this.state.currentTimeM,
        });
      }
    }, 1000);
  };

  pause = () => {
    clearInterval(interval);
    this.setState({
      cycle: this.state.cycle,
      currentTimeH: this.state.currentTimeH,
      currentTimeM: this.state.currentTimeM,
    });
  };

  initial = () => {
    clearInterval(interval);
    this.setState({
      cycle: "Session",
      currentTimeH: 25,
      currentTimeM: "00",
      sessionTime: 25,
      breakTime: 5,
    });
  };

  render() {
    return (
      <div className="main">
        <h1>Promodoro</h1>
        <Timer
          cycle={this.state.cycle}
          currentTimeH={this.state.currentTimeH}
          currentTimeM={this.state.currentTimeM}
        />

        <Play start={this.start} initial={this.initial} pause={this.pause} />
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
