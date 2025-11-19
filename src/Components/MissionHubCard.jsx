import { useState } from "react";
import MissionBriefingModal from "./MissionBriefingModal";
import clock from "../assets/icons/missionHub/clock.svg";
import starCircle from "../assets/icons/starCircle.svg";
import "../styles/MissionHubCard.css";

const buttonText = {
  beforeActivity: "View Mission Briefing",
  afterActivity: "View Team Contributions",
};

function getButtonStyle(id) {
  if (id == 0) {
    return " ";
  } else if (id == 3) {
    return "disabledButton secondaryButton";
  } else {
    return "disabledButton";
  }
}

{
  /* Needs to be updated when full functionality--i.e tracking if activity is completed--is added */
}
function getButtonText(id) {
  if (id == 3) {
    return buttonText.afterActivity;
  } else {
    return buttonText.beforeActivity;
  }
}

export default function MissionHubCard({
  id,
  icon,
  alt,
  headline,
  body,
  minutes,
  points,
  numCompleted,
}) {
  // Add codes here to test out MissionBriefingModal; remove when done testing
  const [showModal, setShowModal] = useState(false);
  const handleMissionModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="cardContainer">
      <img src={icon} alt={alt} className="cardIcon" />
      <h2>{headline}</h2>
      <p>{body}</p>
      <div className="infoSection">
        <img src={clock} alt="clock icon" className="inlineIcon" />
        <p>
          {minutes}
          <span>•</span>
          {points}
        </p>
      </div>
      <div className="teammatesSection">
        <img src={starCircle} alt="star icon" className="inlineIcon" />
        <p>{numCompleted}/5 teammates completed</p>
      </div>
      {/* Needs to be updated when full functionality is added */}
      <button
        onClick={handleMissionModal}
        disabled={id == 0 ? false : true}
        className={getButtonStyle(id)}
      >
        {getButtonText(id)}
      </button>
      {showModal && <MissionBriefingModal onClose={handleCloseModal} />}
    </div>
  );
}
