import { useContext, createContext, useState } from "react";

export const defaultState = {
  activityCompleted: false,
  setActivityCompleted: () => {},
  quizScore: 0,
  setQuizScore: () => {},
  missionCompleted: false,
  setMissionCompleted: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  showLoginModal: false,
  setShowLoginModal: () => {},
};

export const UserContext = createContext(defaultState);

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [activityCompleted, setActivityCompleted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [missionCompleted, setMissionCompleted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const value = {
    activityCompleted,
    setActivityCompleted,
    quizScore,
    setQuizScore,
    missionCompleted,
    setMissionCompleted,
    isLoggedIn,
    setIsLoggedIn,
    showLoginModal,
    setShowLoginModal,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
