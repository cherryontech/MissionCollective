import { leaderboardContent } from "../../data/leaderboard";
import FilterArrow from "../../assets/icons/filterArrow.svg";
import "../../styles/Leaderboard.css";

export default function Leaderboard() {
  return (
    <div className="leaderboard-container">
      <div className="leaderboard-header">
        <h2>Leaderboard</h2>
        <div className="filters">
          <div className="filter">
            <p>View</p>
            <div className="dropdown">
              <p>All Teams</p>
              <img src={FilterArrow} alt="filter-arrow" />
            </div>
          </div>
          <div className="filter">
            <p>Time Period</p>
            <div className="dropdown">
              <p>Last 30 Days</p>
              <img src={FilterArrow} alt="filter-arrow" />
            </div>
          </div>
          <div className="filter">
            <p>Rank By</p>
            <div className="dropdown">
              <p>Total Points</p>
              <img src={FilterArrow} alt="filter-arrow" />
            </div>
          </div>
        </div>
      </div>
      <div className="leaderboard">
          {leaderboardContent.map(({ rank, teamName, points }, idx) => (
            <div className="leaderboard-entry" key={`${teamName}-${idx}`}>
              <p className="rank">{rank}</p>
              <p className="team-name">{teamName}</p>
              <p className="points">{points}</p>
            </div>
          ))}
        </div>
    </div>
  );
}
