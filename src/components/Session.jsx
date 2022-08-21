import React from "react";

function Session({ increment, decrement, compteur }) {
  return (
    <div>
      <h5>SessionLength</h5>
      <button className="incre" onClick={increment}>
        <img src="up.svg" alt="" />
      </button>
      <small>{compteur}</small>
      <button className="decre" onClick={decrement}>
        <img src="down.svg" alt="" />
      </button>
    </div>
  );
}

export default Session;
