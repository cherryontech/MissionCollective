import { useActivityContext } from "../Context/ActivityContext";

import { DIFFERENT_CULTURES_TRIVIA } from "../constants";

export default function LearnMoreModal() {
  const {
    currentQuestionID,
    setCurrentQuestionID,
    showLearnMoreModal,
    setShowLearnMoreModal,
  } = useActivityContext();

  const displayText = {
    correct: "Correct! Well done!",
    incorrect: "Incorrect, but nice try though!",
  };

  function handleOnClick() {
    // this should update the currentQuestionID and set showLearnMoreModal to false
  }

  // this should only display if showLearnMoreModal is true
  return (
    <div>
      {/* the text in h3 should change conditionally depending on if the answer was right or not */}
      <h3>{displayText.correct}</h3>
      <p>{DIFFERENT_CULTURES_TRIVIA[currentQuestionID].learnMoreText}</p>
      <button onClick={handleOnClick}>Next question</button>
    </div>
  );
}
