import { createContext, ReactNode, useState } from "react";
import challenges from "../../challenges.json";

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengerContextData {
  level: number;
  currentExperience: number;
  challengerCompleted: number;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
}

interface ChallengerProviderProps {
  children: ReactNode;
}

export const ChallengerContext = createContext({} as ChallengerContextData);

export function ChallengerProvider({ children }: ChallengerProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengerCompleted, setChallengerCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  const levelUp = () => setLevel(level + 1);

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
  };

  const resetChallenge = () => {
    setActiveChallenge(null);
  };

  return (
    <ChallengerContext.Provider
      value={{
        level,
        currentExperience,
        challengerCompleted,
        activeChallenge,
        experienceToNextLevel,
        levelUp,
        startNewChallenge,
        resetChallenge,
      }}
    >
      {children}
    </ChallengerContext.Provider>
  );
}