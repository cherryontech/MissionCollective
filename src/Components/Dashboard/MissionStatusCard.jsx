import "../../styles/MissionStatusCard.css";

export default function MissionStatusCard({ id, icon, alt, headline, body }) {
  return (
    <div className="missionStatusCardContainer" key={id}>
      <img src={icon} alt={alt} className="missionStatusCardIcon" />
      <h3>{headline}</h3>
      <p className="missionStatusCardBody">{body}</p>
    </div>
  );
}
