export default function CardsSteps({ id, icon, title, text }) {
  return (
    <div className="card">
      <div className="card-header-section1">
        <span>{id}</span>
        <img src={icon} alt={`${title} icon`} />
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
