import { teamProgressContent } from "../../data/teamProgress";
import FilterArrow from "../../assets/icons/filterArrow.svg";

export default function TeamProgress() {
  return (
    <div className="team-progress-container">
      <h2>Your Team Progress</h2>
      <div className="team-members">
        {teamProgressContent.map(({ name, role, points, img }, idx) => (
          <div className="team-member" key={`${name}-${idx}`}>
            <img src={img} alt={name} />
            <p className="member-name">{name}</p>
            <p className="member-role">{role}</p>
            <p className="member-points">{points}</p>
          </div>
        ))}
      </div>
      <div className="team-progress-filter">
        <p>Sort By</p>
        <div classname="filter-dropdown">
          <p>Total Points in Last 30 Days</p>
          <img src={FilterArrow} alt="filter-arrow"></img>
        </div>
      </div>
    </div>
  );
}