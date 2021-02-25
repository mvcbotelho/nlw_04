import { ChallengerProvider } from "../context/ChallengerContext";

import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengerProvider>
      <Component {...pageProps} />
    </ChallengerProvider>
  );
}

export default MyApp;
