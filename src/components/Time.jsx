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
    <div className="time">
      {cycle}
      <div>
        <h1>
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
  );
}

export default Time;
