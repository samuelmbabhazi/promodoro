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
  compteur,
  setCompteur,
  setCompteurb,
}) {

  return (
    <div>
    <div className="circular"></div>
    <div className="time" id="timer-label">
      {cycle}
      <div>
        <h1 id="time-left">
          {timer}:{seconde}
        </h1>
      </div>

      <Play
        timer={timer}
        setTimer={setTimer}
        seconde={seconde}
        setSeconde={setSeconde}
        compteurb={compteurb}
        cycle={cycle}
        setCycle={setCycle}
        compteur={compteur}
        setCompteur={setCompteur}
        setCompteurb={setCompteurb}
      />
    </div>
    </div>

  );
}

export default Time;
