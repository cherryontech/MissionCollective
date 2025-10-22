import { useContext, createContext, useState } from "react";
import { DIFFERENT_CULTURES_TRIVIA } from "../constants";

// step 1: create default state
export const defaultState = {
  answer: null,
  currentQuestionID: 0,
  totalScore: 0,
  showLearnMoreModal: false,
  answerMap: {},
  setAnswer: () => {},
  setCurrentQuestion: () => {},
  setTotalScore: () => {},
  setShowLearnMoreModal: () => {},
  updateAnswerMap: () => {},
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
  const [answerMap, updateAnswerMap] = useState({
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
  });
  const value = {
    answer,
    setAnswer,
    currentQuestionID,
    setCurrentQuestionID,
    totalScore,
    setTotalScore,
    showLearnMoreModal,
    setShowLearnMoreModal,
    answerMap,
    updateAnswerMap,
  };
  return (
    <ActivityContext.Provider value={value}>
      {children}
    </ActivityContext.Provider>
  );
};

// step 5: use provider in component (see Activity.jsx)
