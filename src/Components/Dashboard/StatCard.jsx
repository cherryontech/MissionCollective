import "../../styles/StatCard.css";

function numberToString(id, number) {
  let stringNum = "";
  if (id == 3) {
    stringNum = number.toString() + "%";
  } else {
    stringNum = number.toLocaleString("en-US");
  }

  return stringNum;
}

export default function StatCard({ id, icon, alt, number, stat }) {
  return (
    <div className="statCardContainer">
      <img src={icon} alt={alt} />
      <p className="number">{numberToString(id, number)}</p>
      <p className="stat">{stat}</p>
    </div>
  );
}
