import { teamProgressContent } from "../../data/teamProgress";
import FilterArrow from "../../assets/icons/filterArrow.svg";
import "../../styles/TeamProgress.css";

export default function TeamProgress() {
  return (
    <div className="team-progress-container">
      <h2>Your Team Progress</h2>
      <div className="team-members">
        {teamProgressContent.map(({ name, role, points, img }, idx) => (
          <div className="team-member" key={`${name}-${idx}`}>
            <img src={img} alt={name} />
            <div className="member-text">
              <p className="member-name">{name}</p>
              <p className="member-role">{role}</p>
            </div>
            <p className="member-points">{points}</p>
          </div>
        ))}
      </div>
      <div className="team-progress-filter">
        <p>Sort By</p>
        <div className="filter-dropdown">
          <p>Total Points in Last 30 Days</p>
          <img src={FilterArrow} alt="filter-arrow"></img>
        </div>
      </div>
    </div>
  );
}
