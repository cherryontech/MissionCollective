import { useActivityContext } from "../Context/ActivityContext";
import { CULTURE_QUESTIONS } from "../data/cultureQuestions";
import correctLight from "../assets/icons/correctLight.svg";
import incorrectLight from "../assets/icons/incorrectLight.svg";
import "./LearnMoreModal.css";

export default function LearnMoreModal() {
  const {
    currentQuestionID,
    setCurrentQuestionID,
    showLearnMoreModal,
    answerMap,
    setShowLearnMoreModal,
  } = useActivityContext();

  if (!showLearnMoreModal) {
    return null;
  }

  const currentQuestion = CULTURE_QUESTIONS[currentQuestionID];
  const selectedAnswerId = answerMap[currentQuestionID];

  const selectedAnswer = currentQuestion.answers.find(
    (answer) => answer.id === selectedAnswerId
  );

  let isCorrect;
  if (selectedAnswer && selectedAnswer.isCorrect !== null) {
    isCorrect = selectedAnswer.isCorrect;
  } else {
    isCorrect = false;
  }

  const displayText = {
    correct: "Correct! Well done!",
    incorrect: "Incorrect, but nice try though!",
  };

  // TODO: Need logic to handle the case when the user is on the last question in later sprint.
  const handleContinue = () => {
    setCurrentQuestionID((id) => id + 1);
    setShowLearnMoreModal(false);
  };

  return (
    <>
      <div className="LearnMoreModalOverlayer">
        <div className="LearnMoreModalContainer">
          <div className="IsCorrectBanner">
            <h3 className={isCorrect ? "CorrectText" : "IncorrectText"}>
              <img
                src={isCorrect ? correctLight : incorrectLight}
                alt={isCorrect ? "Correct" : "Incorrect"}
                className="IsCorrectIcon"
              />
              {isCorrect ? displayText.correct : displayText.incorrect}
            </h3>
          </div>
          <div className="LearnMoreText">
            <h4>Learn More:</h4>
            <p>{currentQuestion.learnMoreText}</p>
          </div>
          <button className="ContinueButton" onClick={handleContinue}>
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
