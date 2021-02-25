import { useContext, useEffect, useState } from "react";
import { ChallengerContext } from "../../context/ChallengerContext";

import style from "../../styles/components/Countdown.module.css";

let countdownTimeOut: NodeJS.Timeout;

export default function Countdown() {
  const { startNewChallenge } = useContext(ChallengerContext);

  const initialTime = 0.05 * 60;

  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const [hasFinish, setHasFinish] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  const startCountdown = () => setIsActive(true);

  const resetCountdown = () => {
    clearTimeout(countdownTimeOut);
    setIsActive(false);
    setTime(initialTime);
  };

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeOut = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinish(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <div>
      <div className={style.contianer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinish ? (
        <button disabled className={style.countdownButton}>
          Ciclo Encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${style.countdownButton} ${style.active}`}
              onClick={resetCountdown}
            >
              Abandonar Ciclo
            </button>
          ) : (
            <button
              type="button"
              className={style.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
