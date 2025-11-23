import { useActivityContext } from "../../Context/ActivityContext";
import GlobeIcon from "../../assets/icons/globe-icon.svg";
import ExitArrowIcon from "../../assets/icons/exit-arrow.svg";
import "../../styles/QuestionHeaderFooter.css";

export default function QuestionHeader() {
  const { currentQuestionID, setShowExitModal } = useActivityContext();
  function handleOnClick() {
    setShowExitModal(true);
  }

  return (
    <div className="QuestionHeader">
      <div className="CurrentQuestionNumber">
        <img src={GlobeIcon} alt="globe icon"></img>
        <div className="CurrentQuestionNumberText">
          <h2>Question {currentQuestionID + 1} of 10</h2>
          <p>Different Cultures Trivia</p>
        </div>
      </div>
      <div className="ExitMission">
        <button onClick={handleOnClick}>
          Exit Mission
          <img
          src={ExitArrowIcon}
          alt="globe icon"
          height="40"
          width="40"
          aria-label="Exit mission"
        ></img>
        </button>
      </div>
    </div>
  );
}
