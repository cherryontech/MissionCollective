import "../styles/MissionBriefingModal.css";
import { CULTURE_QUESTIONS } from "../data/cultureQuestions";
import GlobeIcon from "../assets/icons/globe-icon.svg";
import forwardArrow from "../assets/icons/forwardArrow.svg";
import backArrow from "../assets/icons/backArrow.svg";
import step1 from "../assets/icons/step1.svg";
import step2 from "../assets/icons/step2.svg";
import step3 from "../assets/icons/step3.svg";

export default function MissionBriefingModal() {
  function handleGoBack() {}

  function handleStart() {}

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
          <div className="InfoContainer">
            <span>{CULTURE_QUESTIONS.length}</span>Questions
          </div>
          <div className="InfoContainer">
            <span>{CULTURE_QUESTIONS.length}</span>Points
          </div>
          <div className="InfoContainer">
            <span>{CULTURE_QUESTIONS.length}</span>Minutes
          </div>
        </div>
        <div>
          <button className="GoBackButton" onClick={handleGoBack}>
            <span className="GoBackText">Go Back</span>
            <img
              src={backArrow}
              alt="Arrow pointing left"
              className="backArrow"
            />
          </button>
          <button className="StartButton" onClick={handleStart}>
            <span className="GoBackText">Let's Start</span>
            <img
              src={forwardArrow}
              alt="Arrow pointing right"
              className="forwardArrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
