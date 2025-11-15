import "../styles/MissionBriefingModal.css";
import { useNavigate } from "react-router-dom";
import { CULTURE_QUESTIONS } from "../data/cultureQuestions";
import GlobeIcon from "../assets/icons/globe-icon.svg";
import forwardArrow from "../assets/icons/forwardArrow.svg";
import backArrow from "../assets/icons/backArrow.svg";
import step1 from "../assets/icons/step1.svg";
import step2 from "../assets/icons/step2.svg";
import step3 from "../assets/icons/step3.svg";

export default function MissionBriefingModal({ onClose }) {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/activity");
  };

  return (
    <div className="MissionBriefingModalOverlayer">
      <div className="MissionBriefingModalContainer">
        <div className="MissionBriefingModalHeader">
          <img src={GlobeIcon} alt="globe icon"></img>
          <h3>Different Cultures Trivia</h3>
          <p>Ready to explore and earn points?</p>
        </div>
        <div className="HowItWorksSection">
          <h4>How it works:</h4>
          <p>
            <span>
              <img src={step1} alt="Step 1" />
            </span>
            Collaborate to explore global traditions and customs.
          </p>
          <p>
            <span>
              <img src={step2} alt="Step 2" />
            </span>
            Learn interesting facts along the way.
          </p>
          <p>
            <span>
              <img src={step3} alt="Step 3" />
            </span>
            Secure points for your team reward.
          </p>
        </div>
        <div className="MissionQuestionInfo">
          <div className="InfoItem">
            <span className="InfoNumber">{CULTURE_QUESTIONS.length}</span>
            <span className="InfoLabel">Questions</span>
          </div>
          <div className="InfoItem">
            <span className="InfoNumber">{CULTURE_QUESTIONS.length}</span>
            <span className="InfoLabel">Points</span>
          </div>
          <div className="InfoItem">
            <span className="InfoNumber">{CULTURE_QUESTIONS.length}</span>
            <span className="InfoLabel">Minutes</span>
          </div>
        </div>
        <div className="ModalButtonContainer">
          <button className="GoBackButton" onClick={onClose}>
            <span className="GoBackText">Go Back</span>
            <img
              src={backArrow}
              alt="Arrow pointing left"
              className="ModalBackArrow"
            />
          </button>
          <button className="StartButton" onClick={handleStart}>
            <span className="StartText">Let's Start</span>
            <img
              src={forwardArrow}
              alt="Arrow pointing right"
              className="ModalForwardArrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
