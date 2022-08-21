import React from "react";

function Session({increment,decrement,compteur}) {
 
  return (
    <div>
    <h5>SessionLength</h5>
      <button onClick={increment}><img src="up.svg" alt="" /></button>
      {compteur}
      <button onClick={decrement}><img src="down.svg" alt="" /></button>
    </div>
  );
}

export default Session;
