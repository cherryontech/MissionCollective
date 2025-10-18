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
        <button handleOnClick>
          {/* TODO: Talk with design team to verify that these are icons */}
          <img src="/" alt="Icon" />
          {text}
        </button>
      ))}
    </div>
  );
}
