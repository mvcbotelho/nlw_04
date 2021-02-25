import { useContext } from "react";
import { ChallengerContext } from "../../context/ChallengerContext";

import style from "../../styles/components/CompleteChallenger.module.css";

export default function CompleteChallenger() {
  const { challengerCompleted } = useContext(ChallengerContext);
  return (
    <div className={style.container}>
      <span>Desafio Completos</span>
      <span>{challengerCompleted}</span>
    </div>
  );
}
