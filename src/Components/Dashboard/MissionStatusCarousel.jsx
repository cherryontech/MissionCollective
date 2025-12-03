import MissionStatusCard from "./MissionStatusCard";
import { useState } from "react";
import { cardContent } from "../../data/missionHubCards";
import leftArrow from "../../assets/icons/dashboard/leftArrow.svg";
import rightArrow from "../../assets/icons/dashboard/rightArrow.svg";
import completedIcon from "../../assets/icons/missionHub/completed.svg";
import "../../styles/MissionStatusCarousel.css";

export default function MissionStatusCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const incompleteMissions = cardContent.filter(
    (card) => card.icon !== completedIcon
  );

  if (incompleteMissions.length === 0) {
    return null;
  }

  const prevCard = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? incompleteMissions.length - 1 : prev - 1
    );
  };

  const nextCard = () => {
    setCurrentIndex((prev) =>
      prev === incompleteMissions.length - 1 ? 0 : prev + 1
    );
  };

  const currentCard = incompleteMissions[currentIndex];
  return (
    <div className="mission-status-carousel">
      <div className="carousel-header">
        <h2>Start a New Mission</h2>
      </div>

      <div className="carousel-container">
        <button onClick={prevCard} className="carousel-leftarrow">
          <img src={leftArrow} className="leftarrow-img" alt="left arrow" />
        </button>

        <div className="card-stack">
          <div className="background-card"></div>

          <div className="carousel-content">
            <MissionStatusCard
              key={currentCard.id}
              id={currentCard.id}
              icon={currentCard.icon}
              alt={currentCard.alt}
              headline={currentCard.headline}
              body={currentCard.body}
            />
          </div>
        </div>

        <button onClick={nextCard} className="carousel-rightarrow">
          <img src={rightArrow} className="rightarrow-img" alt="right arrow" />
        </button>
      </div>
    </div>
  );
}
