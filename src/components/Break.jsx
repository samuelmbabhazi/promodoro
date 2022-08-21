import React from "react";

function Break({ incrementb, decrementb, compteurb }) {
  return (
    <div>
      <h5>BreakLength</h5>
      <button onClick={incrementb}>
        <img src="up.svg" alt="" />
      </button>
      {compteurb}
      <button onClick={decrementb}>
        <img src="down.svg" alt="" />
      </button>
    </div>
  );
}

export default Break;
