import { useContext } from "react";
import { ChallengerContext } from "../../context/ChallengerContext";
import style from "../../styles/components/Profile.module.css";

export default function Profile() {
  const { level } = useContext(ChallengerContext);

  return (
    <div className={style.profileContainer}>
      <img src="https://github.com/mvcbotelho.png" alt="Marcus" />
      <div>
        <strong>Marcus Botelho</strong>
        <p>
          <img src="icons/level.svg" alt="level icon" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
