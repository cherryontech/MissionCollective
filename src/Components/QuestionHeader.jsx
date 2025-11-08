import { useActivityContext } from "../Context/ActivityContext";
import { Link } from "react-router-dom";
import GlobeIcon from "../assets/icons/globe-icon.svg";
import ExitArrowIcon from "../assets/icons/exit-arrow.svg";
import "../styles/QuestionHeaderFooter.css";

export default function QuestionHeader() {
  const { currentQuestionID } = useActivityContext();

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
        <Link to="/">
          <button>
            Exit Mission
            <img
              src={ExitArrowIcon}
              alt="globe icon"
              aria-label="Exit mission"
            ></img>
          </button>
        </Link>
      </div>
    </div>
  );
}
