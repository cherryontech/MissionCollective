import { useState } from "react";
import MissionStatusCarousel from "./MissionStatusCarousel";
import MissionBriefingModal from "../../Components/MissionBriefingModal";
import { useNavigate } from "react-router-dom";
import "../../styles/MissionStatus.css";

export default function MissionStatus() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleViewMission = () => {
    navigate("/mission-hub");
  };

  return (
    <section className="mission-status-section">
      <div className="section-content">
        <MissionStatusCarousel />
      </div>
      <div className="section-button-container">
        <div className="button-briefing-container">
          <button
            className="view-briefing-button"
            onClick={() => setIsModalOpen(true)}
          >
            View Mission Briefing
          </button>
        </div>
        <div className="button-mission-container">
          <button className="view-missions-button" onClick={handleViewMission}>
            See All Missions
          </button>
        </div>
        {isModalOpen && (
          <MissionBriefingModal onClose={() => setIsModalOpen(false)} />
        )}
      </div>
    </section>
  );
}
