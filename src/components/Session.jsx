import React from "react";

function Session({ increment, decrement, compteur }) {
  return (
    <div>
      <h5 id="session-label">Session Length</h5>
      <button className="incre" onClick={increment} id="session-increment" >
        <img src="up.svg" alt="" />
      </button>
      <small id="session-length">{compteur}</small>
      <button className="decre" onClick={decrement} id="session-decrement">
        <img src="down.svg" alt="" />
      </button>
    </div>
  );
}

export default Session;
