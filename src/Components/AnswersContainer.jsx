import { DIFFERENT_CULTURES_TRIVIA } from "../constants";
import { useActivityContext } from "../Context/ActivityContext";

export function getAnswerButtonStyle(id, answer, isCorrect, confirmedAnswer) {
  let style = "answerButton";

  if (confirmedAnswer !== null && isCorrect) {
    style = "correctAnswerButton " + style;
    return style;
  }

  if (id == answer) {
    style = "selectedAnswerButton " + style;
  } else {
    style = "unselectedAnswerButton " + style;
  }

  return style;
}

export default function AnswersContainer() {
  const { currentQuestionID, answer, setAnswer, answerMap } =
    useActivityContext();
  const currentQuestion = DIFFERENT_CULTURES_TRIVIA[currentQuestionID];
  const confirmedAnswer = answerMap[currentQuestionID];

  return (
    <div className="AnswersContainer">
      {currentQuestion.answers.map(({ id, text, isCorrect }) => (
        <button
          key={id}
          className={getAnswerButtonStyle(
            id,
            answer,
            isCorrect,
            confirmedAnswer
          )}
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
