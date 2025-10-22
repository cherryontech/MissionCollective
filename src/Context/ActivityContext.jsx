import { useContext, createContext, useState } from "react";

// step 1: create default state
export const defaultState = {
  answer: null,
  currentQuestionID: 0,
  totalScore: 0,
  showLearnMoreModal: false,
  setAnswer: () => {},
  setCurrentQuestion: () => {},
  setTotalScore: () => {},
  setShowLearnMoreModal: () => {},
};

// step 2: create context
export const ActivityContext = createContext(defaultState);

// step 3: create use context
export const useActivityContext = () => useContext(ActivityContext);

// step 4: create the provider
export const ActivityContextProvider = ({ children }) => {
  const [answer, setAnswer] = useState(null);
  const [currentQuestionID, setCurrentQuestionID] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [showLearnMoreModal, setShowLearnMoreModal] = useState(false);
  const value = {
    answer,
    setAnswer,
    currentQuestionID,
    setCurrentQuestionID,
    totalScore,
    setTotalScore,
    showLearnMoreModal,
    setShowLearnMoreModal,
  };
  return (
    <ActivityContext.Provider value={value}>
      {children}
    </ActivityContext.Provider>
  );
};

// step 5: use provider in component (see Activity.jsx)
