import { useActivityContext } from "../Context/ActivityContext";
import { CULTURE_QUESTIONS } from "../data/cultureQuestions";

export default function LearnMoreModal() {
  const {
    currentQuestionID,
    setCurrentQuestionID,
    setAnswer,
    showLearnMoreModal,
    setShowLearnMoreModal,
  } = useActivityContext();

  const displayText = {
    correct: "Correct! Well done!",
    incorrect: "Incorrect, but nice try though!",
  };

  function handleOnClick() {
    // this should update the currentQuestionID and set showLearnMoreModal to false
    setCurrentQuestionID(currentQuestionID + 1);
    setAnswer(null);
  }

  // this should only display if showLearnMoreModal is true
  return (
    <div className="LearnMoreModal">
      {/* the text in h3 should change conditionally depending on if the answer was right or not */}
      <h3>{displayText.correct}</h3>
      <h4>Learn More:</h4>
      <p>{CULTURE_QUESTIONS[currentQuestionID].learnMoreText}</p>
      <button onClick={handleOnClick}>Continue</button>
    </div>
  );
}
