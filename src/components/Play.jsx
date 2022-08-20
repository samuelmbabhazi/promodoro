import React from "react";

let intervale;
function Play({ timer, setTimer, seconde, setSeconde }) {
  const rebours = () => {
    if (timer > 0) {
      setTimer(timer - 1);
      setSeconde(seconde + 59);
      intervale = setInterval(() => {
        setSeconde(seconde - 1);
      }, 1000);
    }
  };
  return (
    <div>
      <button onClick={rebours}>play</button>
      <button>pause</button>
      <button>reset</button>
    </div>
  );
}

export default Play;
