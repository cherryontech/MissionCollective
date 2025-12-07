import { useUserContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import { Line } from "rc-progress";
import "../../styles/MissionAccomplish.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const layout = {
  fit: "fit-height",
  align: [0.5, 0.5],
};

export default function MissionAccomplish() {
  const { quizScore } = useUserContext();
  const rewardPercent = 89;

  const navigate = useNavigate();

  const handleViewTeamResults = () => {
    navigate("/results");
  };
  const handleViewNextMission = () => {
    navigate("/mission-hub");
  };

  return (
    <div className="mission-accomplish-container">
      <div className="animations-box">
        <DotLottieReact
          src="https://lottie.host/2b6403b7-3511-447a-8f22-cfdfdabfc500/RUbDVg5LNJ.lottie"
          loop
          autoplay
          layout={layout}
        />
      </div>
      <h1>Mission Accomplished!</h1>
      <p>Your impact from completing Different Cultures Trivia</p>

      <div className="points-added-display">
        <span className="points-added">+{quizScore}</span>
        <span className="points-added-text">Points Added</span>
      </div>

      <div className="accomplish-progress-box">
        <p>Reward Progress</p>
        <div style={{ width: "300px" }}>
          <Line
            percent={rewardPercent}
            strokeWidth={6}
            strokeColor="#EC00AA"
            trailColor="#E5E5E5"
            trailWidth={6}
          />
        </div>
        <span>{rewardPercent}%</span>
      </div>
      <div className="button-accomplish-container">
        <div className="accomplish-button-container">
          <button
            className="view-results-button"
            onClick={handleViewTeamResults}
          >
            View Team Results
          </button>
        </div>
        <div className="nextmission-button-container">
          <button
            className="start-nextmissions-button"
            onClick={handleViewNextMission}
          >
            Start Next Mission
          </button>
        </div>
      </div>
    </div>
  );
}
