import "../../styles/StatCard.css";
import { useUserContext } from "../../Context/UserContext";

function numberToString(id, number, quizScore, missionCompleted) {
  let stringNum = "";
  if (id == 0 && !missionCompleted) {
    stringNum = (number + quizScore).toLocaleString("en-US");
  } else if (id == 3) {
    stringNum = number.toString() + "%";
  } else {
    stringNum = number.toLocaleString("en-US");
  }

  return stringNum;
}

export default function StatCard({ id, icon, alt, number, stat }) {
  const { quizScore, missionCompleted } = useUserContext();
  return (
    <div className="statCardContainer">
      <img src={icon} alt={alt} />
      <p className="number">
        {numberToString(id, number, quizScore, missionCompleted)}
      </p>
      <p className="stat">{stat}</p>
    </div>
  );
}
