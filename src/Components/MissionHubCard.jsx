import { useState } from "react";
import MissionBriefingModal from "./MissionBriefingModal";
import clock from "../assets/icons/missionHub/clock.svg";
import starCircle from "../assets/icons/starCircle.svg";
import { cardContent } from "../data/missionHubCards";

const buttonText = {
  beforeActivity: "View Mission Briefing",
  afterActivity: "View Team Contributions",
};

export default function MissionHubCard() {
  // Add codes here to test out MissionBriefingModal; remove when done testing
  const [showModal, setShowModal] = useState(false);
  const handleMissionModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <img src={cardContent[0].icon} alt={cardContent[0].alt} />
      <h2>{cardContent[0].headline}</h2>
      <p>{cardContent[0].body}</p>
      <div>
        <img src={clock} alt="clock icon" />
        <p>{cardContent[0].info}</p>
      </div>
      <div>
        <img src={starCircle} alt="star icon" />
        <p>{cardContent[0].numCompleted}/5 teammates completed</p>
      </div>
      {/* Add codes here to test out MissionBriefingModal; remove when done testing */}
      <button onClick={handleMissionModal}>{buttonText.beforeActivity}</button>
      {showModal && <MissionBriefingModal onClose={handleCloseModal} />}
    </div>
  );
}
