import { DIFFERENT_CULTURES_TRIVIA } from "../constants";
import { useActivityContext } from "../Context/ActivityContext";

export default function AnswersContainer() {
  const { currentQuestionID } = useActivityContext();
  const currentQuestion = DIFFERENT_CULTURES_TRIVIA[currentQuestionID];
  function handleOnClick() {
    //TODO
  }

  return (
    <div className="AnswersContainer">
      {currentQuestion.answers.map(({ id, text, isCorrect }) => (
        <button
          className="unselectedAnswerButton answerButton"
          onClick={handleOnClick}
        >
          <img src="src\assets\images\icons\optionA.svg" alt="Icon A" />
          <span className="answerButtonText">{text}</span>
        </button>
      ))}
    </div>
  );
}
