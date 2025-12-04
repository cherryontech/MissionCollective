import { useState } from "react";
import { statCardContent } from "../../data/statCards";
import { useUserContext } from "../../Context/UserContext";
import { Line } from "rc-progress";

export default function MissionAccomplish() {
  const { quizScore } = useUserContext();
  const percent = statCardContent.find((card) => card.id === 3)?.number || 0;

  return (
    <div className="mission-accomplish-container">
      <div className="mission-accomplish-header">
        <h1>Mission Reward</h1>
        <p>Your impact from completing Different Cultures Trivia</p>
      </div>
      <div className="points-added-display">
        <span className="points-added">+{quizScore}</span>
        <p>Points Added</p>
      </div>
      <div className="accomplish-progress-bar">
        <div style={{ width: "300px" }}>
          <Line
            percent={percent}
            strokeWidth={6}
            strokeColor="#ff69b4"
            trailColor="#f0f0f0"
          />
        </div>
      </div>
    </div>
  );
}
