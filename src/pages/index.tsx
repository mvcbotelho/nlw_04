import Head from "next/head";

import { CountdownProvider } from "../context/CountdownContext";

import Profile from "../components/Profile";
import Countdown from "../components/Countdown";
import ChallengerBox from "../components/ChallengerBox";
import { ExperienceBar } from "../components/ExperienceBar";
import CompleteChallenger from "../components/CompleteChallenger";

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Move it</title>
      </Head>
      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompleteChallenger />
            <Countdown />
          </div>
          <div>
            <ChallengerBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  );
}
