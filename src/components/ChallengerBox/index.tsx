import style from "../../styles/components/ChallengerBox.module.css";

export default function ChallengerBox() {
  const hasActiveChallenger = true;

  return (
    <div className={style.container}>
      {hasActiveChallenger ? (
        <div className={style.challengerActive}>
          <header>Ganhe 400 XP</header>
          <main>
            <img src="icons/body.svg" alt="body" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 5 minutos</p>
          </main>
          <footer>
            <button type="button" className={style.failButton}>
              Falhei
            </button>
            <button type="button" className={style.successButton}>
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
