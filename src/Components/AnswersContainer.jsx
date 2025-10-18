import { DIFFERENT_CULTURES_TRIVIA } from "../constants";
import { useActivityContext } from "../Context/ActivityContext";

export default function AnswersContainer() {
  const { currentQuestionID } = useActivityContext();
  const currentQuestion = DIFFERENT_CULTURES_TRIVIA[currentQuestionID];

  function onClick() {
    // update answer
  }

  return (
    <div className="AnswersContainer">
      <button>A {currentQuestion.answers[0].text}</button>
      <button>B {currentQuestion.answers[1].text}</button>
      <button>C {currentQuestion.answers[2].text}</button>
      <button>D {currentQuestion.answers[3].text}</button>
    </div>
  );
}
