import { useState } from "react";
import MissionBriefingModal from "./MissionBriefingModal";

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
      <h2>Card Headline</h2>
      <p>Card Body</p>
      <p>Mission Info</p>
      <p>#/# teammates completed</p>

      {/* Add codes here to test out MissionBriefingModal; remove when done testing */}
      <button onClick={handleMissionModal}>Button Text</button>
      {showModal && <MissionBriefingModal onClose={handleCloseModal} />}
    </div>
  );
}
