import { useActivityContext } from "../Context/ActivityContext";
import GlobeIcon from "../assets/globe-icon.svg";
import "../styles/QuestionHeader.css";

export default function QuestionHeader() {
  const { currentQuestionID } = useActivityContext();
  function handleOnClick() {
    // TODO
  }

  return (
    <div className="QuestionHeader">
      <div className="CurrentQuestionNumber">
        <img
          src={GlobeIcon}
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