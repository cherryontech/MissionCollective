import { useActivityContext } from "../Context/ActivityContext";

import { CULTURE_QUIZ } from "../constants";

export default function LearnMoreModal() {
  const [
    currentQuestionID,
    setCurrentQuestionID,
    showLearnMoreModal,
    setShowLearnMoreModal,
  ] = useActivityContext;

  function handleOnClick() {
    // this should update the currentQuestionID and set showLearnMoreModal to false
  }

  // this should only display if showLearnMoreModal is true
  return (
    <div>
      <h4>Correct/Incorrect message</h4>
      <p>{CULTURE_QUIZ[currentQuestionID].learnMoreText}</p>
      <button onClick={handleOnClick}>Next question</button>
    </div>
  );
}
