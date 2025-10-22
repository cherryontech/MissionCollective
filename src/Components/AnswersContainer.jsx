import { DIFFERENT_CULTURES_TRIVIA } from "../constants";
import { useActivityContext } from "../Context/ActivityContext";

export default function AnswersContainer() {
  const { currentQuestionID, answer, setAnswer } = useActivityContext();
  const currentQuestion = DIFFERENT_CULTURES_TRIVIA[currentQuestionID];

  return (
    <div className="AnswersContainer">
      {currentQuestion.answers.map(({ id, text, isCorrect }) => (
        <button
          key={id}
          className={
            id == answer
              ? "selectedAnswerButton"
              : "unselectedAnswerButton answerButton"
          }
          onClick={() => setAnswer(id)}
        >
          <img
            src={"src\\assets\\images\\icons\\option" + id + ".svg"}
            alt={"Letter " + id + "icon"}
          />
          <span className="answerButtonText">{text}</span>
        </button>
      ))}
    </div>
  );
}
