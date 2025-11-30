import "../../styles/StatCard.css";

export default function StatCard({ id, icon, alt, number, stat }) {
  return (
    <div className="statCardContainer">
      <img src={icon} alt={alt} />
      <p className="number">{number}</p>
      <p className="stat">{stat}</p>
    </div>
  );
}
