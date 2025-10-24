import { useActivityContext } from "../Context/ActivityContext";
import GlobeIcon from "../assets/globe-icon.svg";
import ExitArrowIcon from "../assets/exit-arrow.svg";
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
        <div className="CurrentQuestionNumberText">
          <h2>Question {currentQuestionID + 1} of 10</h2>
          <p>Different Cultures Trivia</p>
        </div>
      </div>
      <div className="ExitMissionButton">
        <button onClick={handleOnClick}>Exit Mission</button>
        <img
          src={ExitArrowIcon}
          alt="globe icon"
          height="40"
          width="40"
        ></img>
      </div>
    </div>
  );
}