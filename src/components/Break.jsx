import React from "react";

function Break({incrementb,decrementb,compteurb}) {
  return (
    <div>
      <button onClick={incrementb}>plus</button>
      {compteurb}
      <button onClick={decrementb}>moins</button>
    </div>
  );
}

export default Break;
