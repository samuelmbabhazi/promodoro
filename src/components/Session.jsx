import React from "react";

function Session({increment,decrement,compteur}) {
 
  return (
    <div>
      <button onClick={increment}>plus</button>
      {compteur}
      <button onClick={decrement}>moins</button>
    </div>
  );
}

export default Session;
