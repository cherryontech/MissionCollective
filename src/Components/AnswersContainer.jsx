import { DIFFERENT_CULTURES_TRIVIA } from "../constants";
import { useActivityContext } from "../Context/ActivityContext";

export function getButtonStyle(id, answer, isCorrect, confirmedAnswer) {
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

export function getButtonIconSrc(id, answer, isCorrect, confirmedAnswer) {
  if (isCorrect && confirmedAnswer !== null) {
    return "../assets/images/icons/correctLight.svg";
  } else if (id == answer && confirmedAnswer !== null) {
    return "../assets/images/icons/incorrectLight.svg";
  }

  return "../assets/images/icons/option" + id + ".svg";
}

export function getButonIconAlt(id, answer, isCorrect, confirmedAnswer) {
  if (isCorrect && confirmedAnswer !== null) {
    return "Checkmark icon";
  } else if (id == answer && confirmedAnswer !== null) {
    return "X icon";
  }

  return "Letter " + id + " icon";
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
          className={getButtonStyle(id, answer, isCorrect, confirmedAnswer)}
          onClick={() => setAnswer(id)}
        >
          <img
            src={getButtonIconSrc(id, answer, isCorrect, confirmedAnswer)}
            alt={getButonIconAlt(id, answer, isCorrect, confirmedAnswer)}
          />
          <span className="answerButtonText">{text}</span>
        </button>
      ))}
    </div>
  );
}
