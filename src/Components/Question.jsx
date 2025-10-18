import { CULTURE_QUIZ } from "../constants";
import { useActivityContext } from "../Context/ActivityContext";
import AnswersContainer from "./AnswersContainer";
import LearnMoreModal from "./LearnMoreModal";

export default function Question() {
  const { currentQuestionID } = useActivityContext();
  const currentQuestion = CULTURE_QUIZ[currentQuestionID];

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
    <div className="QuestionContainer">
      <p>{currentQuestion.question}</p>
      <img src="/" alt={currentQuestion.altText}></img>
      <LearnMoreModal></LearnMoreModal>
      <button onClick={handlePreviousQuestionOnClick}>Previous Question</button>
      <button onClick={handleSkipOnClick}>Confirm Answer</button>
      <button onClick={handleSkipOnClick}>Skip</button>
      <AnswersContainer></AnswersContainer>
    </div>
  );
}
