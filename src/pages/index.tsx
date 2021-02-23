import Head from "next/head";

import CompleteChallenger from "../components/CompleteChallenger";
import Countdown from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import Profile from "../components/Profile";

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Move it</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompleteChallenger />
          <Countdown />
        </div>
        <div></div>
      </section>
    </div>
  );
}
