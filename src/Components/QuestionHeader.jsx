import { useActivityContext } from "../Context/ActivityContext";

export default function QuestionHeader() {
  const { currentQuestionID } = useActivityContext();
  function handleOnClick() {
    // TODO
  }

  return (
    <div className="QuestionHeader">
      <div className="CurrentQuestionNumber">
        <img src="/" alt="globe icon"></img>
        <h2>Question {currentQuestionID + 1} of 10</h2>
        <p>Different Cultures Trivia</p>
      </div>
      <button onClick={handleOnClick}>Exit Mission</button>
    </div>
  );
}
