import { useActivityContext } from "../Context/ActivityContext";

export default function QuestionHeader() {
  const { currentQuestionID } = useActivityContext();
  function handleOnClick() {
    // TODO
  }

  return (
    <div className="QuestionHeader">
      <div className="CurrentQuestionNumber">
        <img
          src="https://placehold.net/avatar-5.png"
          alt="globe icon"
          height="40"
          width="40"
        ></img>
        <h2>Question {currentQuestionID + 1} of 10</h2>
        <p>Different Cultures Trivia</p>
      </div>
      <button onClick={handleOnClick}>Exit Mission</button>
    </div>
  );
}
