import { CULTURE_QUESTIONS } from "../../data/cultureQuestions";
import { useActivityContext } from "../../Context/ActivityContext";
import AnswersContainer from "./AnswersContainer";
import LearnMoreModal from "./LearnMoreModal";
import forwardArrow from "../../assets/icons/forwardArrow.svg";
import backArrow from "../../assets/icons/backArrow.svg";
import { useUserContext } from "../../Context/UserContext";

export default function Question() {
  const {
    currentQuestionID,
    setCurrentQuestionID,
    answer,
    setAnswer,
    updateAnswerMap,
    setShowLearnMoreModal,
  } = useActivityContext();

  const { setQuizScore } = useUserContext();

  const currentQuestion = CULTURE_QUESTIONS[currentQuestionID];

  // Full functionality to be added later on
  function handlePreviousQuestionOnClick() {
    if (currentQuestionID != 0) {
      setCurrentQuestionID(currentQuestionID - 1);
    }
    setAnswer(null);
  }

  function handleConfirmAnswerOnClick() {
    updateAnswerMap((prev) => ({
      ...prev,
      [currentQuestionID]: answer,
    }));

    const selectedAnswer = currentQuestion.answerOptions.find(
      (answerOption) => answer === answerOption.id
    );
    // 10 points for correct answer, 1 point for incorrect answer
    if (selectedAnswer.isCorrect) {
      setQuizScore((prev) => (prev += 10));
    } else {
      setQuizScore((prev) => (prev += 1));
    }

    setShowLearnMoreModal(true);
  }

  // Full functionality to be added later
  function handleSkipOnClick() {
    if (currentQuestionID != 9) {
      setCurrentQuestionID(currentQuestionID + 1);
    }
    setAnswer(null);
  }

  return (
    <div className="Question">
      <div className="QuestionContainer">
        <p>{currentQuestion.questionText}</p>
        <img src={currentQuestion.imageSrc} alt={currentQuestion.altText} />
        <AnswersContainer />
      </div>
      <div className="QuestionNavigation">
        <div className="buttonSection">
          <button
            className={
              currentQuestionID == 0
                ? "secondaryButton disabledButton navButton"
                : "secondaryButton navButton"
            }
            onClick={handlePreviousQuestionOnClick}
            disabled={currentQuestionID == 0 ? true : false}
          >
            <span className="navButtonText">Previous Question</span>
            <img
              src={backArrow}
              alt="Arrow pointing left"
              className="backArrow"
            />
          </button>
          <button
            className={answer ? "navButton" : "navButton disabledButton"}
            onClick={handleConfirmAnswerOnClick}
            disabled={answer ? false : true}
          >
            <span className="navButtonText">Confirm Answer</span>
            <img
              src={forwardArrow}
              alt="Arrow pointing right"
              className="forwardArrow"
            />
          </button>
        </div>
        <div className="skipSection">
          <button
            className={
              currentQuestionID == 9
                ? "buttonAsLink disabledButton"
                : "buttonAsLink"
            }
            onClick={handleSkipOnClick}
            disabled={currentQuestionID == 9 ? true : false}
          >
            Skip For Now
          </button>
        </div>
      </div>
      <LearnMoreModal />
    </div>
  );
}
