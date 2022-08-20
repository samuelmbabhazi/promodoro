import React from "react";
import Play from "./Play";

function Time({
  cycle,
  setCycle,
  timer,
  setTimer,
  seconde,
  setSeconde,
  compteurb,
}) {
  return (
    <div>
     {cycle}
    <div>
    {timer}:{seconde}
    </div>
   
      
      <Play
        timer={timer}
        setTimer={setTimer}
        seconde={seconde}
        setSeconde={setSeconde}
        compteurb={compteurb}
        cycle={cycle}
        setCycle={setCycle}
      />
    </div>
  );
}

export default Time;
