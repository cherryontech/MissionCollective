import { useContext, createContext, useState } from "react";

export const defaultState = {
  activityCompleted: false,
  setActivityCompleted: () => {},
  quizScore: 0,
  setQuizScore: () => {},
  missionCompleted: false,
  setMissionCompleted: () => {},
  rewardViewed: false,
  setRewardViewed: () => {},
};

export const UserContext = createContext(defaultState);

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [activityCompleted, setActivityCompleted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [missionCompleted, setMissionCompleted] = useState(false);
  const [rewardViewed, setRewardViewed] = useState(false);

  const value = {
    activityCompleted,
    setActivityCompleted,
    quizScore,
    setQuizScore,
    missionCompleted,
    setMissionCompleted,
    rewardViewed,
    setRewardViewed,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
