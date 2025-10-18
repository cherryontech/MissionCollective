import { DIFFERENT_CULTURES_TRIVIA } from "../constants";
import { useActivityContext } from "../Context/ActivityContext";
import Answer from "./Answer";

export default function AnswersContainer() {
  const { currentQuestionID } = useActivityContext();
  const currentQuestion = DIFFERENT_CULTURES_TRIVIA[currentQuestionID];

  return (
    <div className="AnswersContainer">
      {currentQuestion.answers.map(({ id, text, isCorrect }) => (
        <Answer text={text} key={id} isCorrect={isCorrect} />
      ))}
    </div>
  );
}
