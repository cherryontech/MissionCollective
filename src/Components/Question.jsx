import { DIFFERENT_CULTURES_TRIVIA } from "../constants";
import { useActivityContext } from "../Context/ActivityContext";
import AnswersContainer from "./AnswersContainer";
import LearnMoreModal from "./LearnMoreModal";

export default function Question() {
  const { currentQuestionID, answer } = useActivityContext();
  const currentQuestion = DIFFERENT_CULTURES_TRIVIA[currentQuestionID];

  function handlePreviousQuestionOnClick() {
    // TODO
  }

  function handleConfirmAnswerOnClick() {
    // TODO
  }

  function handleSkipOnClick() {
    // TODO
  }

  return (
    <div className="Question">
      <div className="QuestionContainer">
        <p>{currentQuestion.question}</p>
        <img src={currentQuestion.imageURL} alt={currentQuestion.altText}></img>
        <AnswersContainer />
      </div>
      <div className="QuestionNavigation">
        <button className="grayButton" onClick={handlePreviousQuestionOnClick}>
          Previous Question ⤺
        </button>
        <button
          className={answer ? "" : "disabledButton"}
          onClick={handleConfirmAnswerOnClick}
        >
          Confirm Answer ➝
        </button>
        <button className="buttonAsLink" onClick={handleSkipOnClick}>
          Skip For Now
        </button>
      </div>
      <LearnMoreModal />
    </div>
  );
}
