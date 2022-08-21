import React from "react";
import "./App.css"
import Session from "./components/Session";
import { useState } from "react";
import Break from "./components/Break";
import Time from "./components/Time";

function App() {
  const [compteur, setCompteur] = useState(25);
  const [compteurb, setCompteurb] = useState(5);
  const [timer, setTimer] = useState(compteur);
  const [seconde, setSeconde] = useState(0);
  const[cycle,setCycle]=useState("Session")
  if (seconde === 0) {
    setSeconde(seconde + "0");
  }

  let increment = () => {
    setCompteur(compteur + 1);
    setTimer(timer + 1);
  };
  let decrement = () => {
    if (compteur > 1) {
      setCompteur(compteur - 1);
      setTimer(timer - 1);
    }
  };
  let incrementb = () => {
    setCompteurb(compteurb + 1);
  };
  let decrementb = () => {
    if (compteurb > 1) {
      setCompteurb(compteurb - 1);
    }
  };
  return (
    <div className="main">
      <div>
        <Time
        
          timer={timer}
          setTimer={setTimer}
          seconde={seconde}
          setSeconde={setSeconde}
          compteurb={compteurb}
          compteur={compteur}
          setCompteur={setCompteur}
          setCompteurb={setCompteurb}
          cycle={cycle}
          setCycle={setCycle}
        />
        <div className="incredecre">
        <Session
          increment={increment}
          decrement={decrement}
          compteur={compteur}
        />
        <Break
          incrementb={incrementb}
          decrementb={decrementb}
          compteurb={compteurb}
        />
        </div>
        
      </div>
    </div>
  );
}

export default App;
