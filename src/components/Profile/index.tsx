import style from "../../styles/components/Profile.module.css";

export default function Profile() {
  return (
    <div className={style.profileContainer}>
      <img src="https://github.com/mvcbotelho.png" alt="Marcus" />
      <div>
        <strong>Marcus Botelho</strong>
        <p>
          <img src="icons/level.svg" alt="level icon" />
          Level 01
        </p>
      </div>
    </div>
  );
}
