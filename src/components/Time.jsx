import React from "react";
import Play from "./Play";

function Time({ timer ,setTimer,seconde,setSeconde}) {
  
  return (
    <div>
      {timer}:{seconde}
      <Play timer={timer} setTimer={setTimer} seconde={seconde} setSeconde={setSeconde} />
    </div>
  );
}

export default Time;
