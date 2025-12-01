import { useContext, createContext, useState } from "react";

export const defaultState = {
  activityCompleted: false,
  setActivityCompleted: () => {},
  quizScore: 0,
  setQuizScore: () => {},
  missionCompleted: false,
  setMissionCompleted: () => {},
};

export const UserContext = createContext(defaultState);

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [activityCompleted, setActivityCompleted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [missionCompleted, setMissionCompleted] = useState(false);
  const value = {
    activityCompleted,
    setActivityCompleted,
    quizScore,
    setQuizScore,
    missionCompleted,
    setMissionCompleted,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
