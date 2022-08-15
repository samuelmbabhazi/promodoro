import React, { Component } from "react";

export default class Play extends Component {
  toplay = () => {
    this.props.start();
  };
  reunitial = () => {
    this.props.initial();
  };
  render() {
    return (
      <div className="play">
        <button onClick={this.toplay}>
          <img src="play.svg" alt="" width={10} />
        </button>

        <button onClick={this.reunitial}>
          <img className="rotate" src="rotate.svg" alt="" width={10} />
        </button>
      </div>
    );
  }
}
