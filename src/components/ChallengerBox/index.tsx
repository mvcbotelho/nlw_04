import { useContext } from "react";
import { ChallengerContext } from "../../context/ChallengerContext";
import { CountdonwContext } from "../../context/CountdownContext";

import style from "../../styles/components/ChallengerBox.module.css";

export default function ChallengerBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengerContext
  );
  const { resetCountdown } = useContext(CountdonwContext);

  const hanldeSuccess = () => {
    completeChallenge();
    resetCountdown();
  };

  const hanldeFail = () => {
    resetChallenge();
    resetCountdown();
  };

  return (
    <div className={style.container}>
      {activeChallenge ? (
        <div className={style.challengerActive}>
          <header>Ganhe {activeChallenge.amount} XP</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="body" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type="button"
              className={style.failButton}
              onClick={hanldeFail}
            >
              Falhei
            </button>
            <button
              type="button"
              className={style.successButton}
              onClick={hanldeSuccess}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={style.challengerNotActive}>
          <strong>Finalize um ciclo para receber novos desafios.</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up icon" />
            Avence de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}
