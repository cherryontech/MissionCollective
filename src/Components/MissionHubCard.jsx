import { useState } from "react";
import { useUserContext } from "../Context/UserContext";
import completed from "../assets/icons/missionHub/completed.svg";
import MissionBriefingModal from "./MissionBriefingModal";
import clock from "../assets/icons/missionHub/clock.svg";
import starCircle from "../assets/icons/starCircle.svg";
import "../styles/MissionHubCard.css";

const buttonText = {
  beforeActivity: "View Mission Briefing",
  afterActivity: "View Team Contributions",
};

function getButtonStyle(id, activityCompleted) {
  if (id == 0) {
    if (activityCompleted) {
      return "secondaryButton";
    } else {
      return " ";
    }
  } else if (id == 3) {
    return "disabledButton secondaryButton";
  } else {
    return "disabledButton";
  }
}

function getButtonText(id, activityCompleted) {
  if (id == 3) {
    return buttonText.afterActivity;
  } else if (id == 0 && activityCompleted) {
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
  const { activityCompleted } = useUserContext();
  const [showModal, setShowModal] = useState(false);

  // TODO: Update to link to the dashboard after activity has been completed
  const handleMissionModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="cardContainer">
      <img
        src={activityCompleted && id == 0 ? completed : icon}
        alt={activityCompleted && id == 0 ? "checkmark icon" : alt}
        className="cardIcon"
      />
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
        <p>
          {activityCompleted === true && id == 0
            ? numCompleted + 1
            : numCompleted}
          /5 teammates completed
        </p>
      </div>
      <button
        onClick={handleMissionModal}
        disabled={id == 0 ? false : true}
        className={getButtonStyle(id, activityCompleted)}
      >
        {getButtonText(id, activityCompleted)}
      </button>
      {showModal && <MissionBriefingModal onClose={handleCloseModal} />}
    </div>
  );
}
