import { CULTURE_QUESTIONS } from "../data/cultureQuestions";
import { useActivityContext } from "../Context/ActivityContext";
import AnswersContainer from "./AnswersContainer";
import LearnMoreModal from "./LearnMoreModal";

export default function Question() {
  const { currentQuestionID, setCurrentQuestionID, answer, updateAnswerMap } =
    useActivityContext();
  const currentQuestion = CULTURE_QUESTIONS[currentQuestionID];

  function handlePreviousQuestionOnClick() {
    if (currentQuestionID != 0) {
      setCurrentQuestionID(currentQuestionID - 1);
    }
  }

  function handleSkipOnClick() {
    if (currentQuestionID != 9) {
      setCurrentQuestionID(currentQuestionID + 1);
    }
  }

  return (
    <div className="Question">
      <div className="QuestionContainer">
        <p>{currentQuestion.questionText}</p>
        <img src={currentQuestion.imageURL} alt={currentQuestion.altText}></img>
        <AnswersContainer />
      </div>
      <div className="QuestionNavigation">
        <button
          className={
            currentQuestionID == 0 ? "grayButton disabledButton" : "grayButton"
          }
          onClick={handlePreviousQuestionOnClick}
        >
          Previous Question ⤺
        </button>
        <button
          className={answer ? "" : "disabledButton"}
          onClick={() =>
            updateAnswerMap((prev) => ({
              ...prev,
              [currentQuestionID]: answer,
            }))
          }
        >
          Confirm Answer ➝
        </button>
        <button
          className={
            currentQuestionID == 9
              ? "buttonAsLink disabledButton"
              : "buttonAsLink"
          }
          onClick={handleSkipOnClick}
        >
          Skip For Now
        </button>
      </div>
      <LearnMoreModal />
    </div>
  );
}
