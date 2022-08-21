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
  compteur,
  setCompteur,
  setCompteurb,
}) {
  let pauser = document.getElementsByClassName("pause");
  let player = document.getElementsByClassName("play");
  let reseter = document.getElementsByClassName("reset");
  let time = document.getElementsByClassName("time");
  let incre = document.getElementsByClassName("incre");
  let decre = document.getElementsByClassName("decre");

  const rebours = () => {
    time[0].style.border = "6px solid black";
    incre[0].style.display = "none";
    incre[1].style.display = "none";
    decre[0].style.display = "none";
    decre[1].style.display = "none";
    pauser[0].style.display = "block";
    reseter[0].style.display = "block";
    player[0].style.display = "none";

    intervale = setInterval(() => {
      if (seconde === 0 && timer >= 1) {
        setTimer((timer -= 1));
        setSeconde((seconde = 60));
      }
      if (seconde === 0 && timer === 0 && cycle === "Session") {
        setCycle((cycle = "Break"));
        setTimer((timer += compteurb));
        time[0].style.border = "6px solid rgb(1, 52, 1)";
      }

      if (timer < 1) {
        time[0].style.color = "red";
        time[0].style.border = "6px solid red";
      } else {
        time[0].style.color = "black";
      }

      if (seconde > 0 && timer >= 0) {
        setSeconde((seconde -= 1));
      }
    }, 100);
  };

  const pause = () => {
    clearInterval(intervale);
    pauser[0].style.display = "none";
    reseter[0].style.display = "block";
    player[0].style.display = "block";
  };
  const reset = () => {
    clearInterval(intervale);
    incre[0].style.display = "inline-block";
    incre[1].style.display = "inline-block";
    decre[0].style.display = "inline-block";
    decre[1].style.display = "inline-block";
    time[0].style.color = "black";
    time[0].style.border = "6px solid white";
    pauser[0].style.display = "none";
    reseter[0].style.display = "none";
    player[0].style.display = "block";

    setCycle((cycle = "Session"));
    setTimer((timer = 25));
    setSeconde((seconde = 0));
    setCompteur((compteur = 25));
    setCompteurb((compteurb = 5));
  };

  return (
    <div className="player">
      <button className="play" onClick={rebours}>
        <img src="play.svg" alt="" />
      </button>
      <button className="pause" onClick={pause}>
        <img src="pause.svg" alt="" />
      </button>

      <button className="reset" onClick={reset}>
        <img src="rotate.svg" alt="" />
      </button>
    </div>
  );
}

export default Play;
