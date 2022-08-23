import React from "react";

function Break({ incrementb, decrementb, compteurb }) {
  return (
    <div>
      <h5 id="break-label">Break Length</h5>
      <button className="incre" onClick={incrementb}  id="break-increment"  >
        <img src="up.svg" alt="" />
      </button>
     <small id="break-length">{compteurb}</small> 
      <button className="decre" onClick={decrementb} id="break-decrement" >
        <img src="down.svg" alt="" />
      </button>
    </div>
  );
}

export default Break;
