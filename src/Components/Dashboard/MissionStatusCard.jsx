import "../../styles/MissionStatusCard.css";

export default function MissionStatusCard({ id, icon, alt, headline, body }) {
  return (
    <div className="missionStatusCardContainer" key={id}>
      <img src={icon} alt={alt} className="missionStatusCardIcon" />
      <h2>{headline}</h2>
      <p className="missionStatusCardBody">{body}</p>
    </div>
  );
}
