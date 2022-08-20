import React from "react";

let intervale;
function Play({
  cycle,
  setCycle,
  timer,
  setTimer,
  seconde,
  setSeconde,
  compteurb,
}) {
  const rebours = () => {
    intervale = setInterval(() => {
      if (seconde == 0 && timer == 0 && cycle != "Break") {
        setCycle((cycle = "Break"));
        setTimer((timer = +compteurb));
      }
      if (seconde == 0 && timer >= 1) {
        setTimer((timer -= 1));
        setSeconde((seconde = 59));
      }
      if (seconde > 0 && timer >= 0) {
        setSeconde((seconde -= 1));
      }
    }, 100);
  };

  const pause = () => {
    clearInterval(intervale);
  };
  const reset = () => {
    setCycle((cycle = "Session"));
    setTimer((timer = 25));
    setSeconde((seconde = 0));
  };
  return (
    <div>
      <button onClick={rebours}>play</button>
      <button onClick={pause}>pause</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default Play;
