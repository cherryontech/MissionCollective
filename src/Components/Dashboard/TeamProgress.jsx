import { teamProgressContent } from "../../data/teamProgress";

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
    </div>
  );
}