import "../../styles/StatCard.css";
import { useUserContext } from "../../Context/UserContext";

// TODO: Update this function when we add condition for unlocking reward
function numberToString(id, number, activityCompleted, quizScore) {
  let stringNum = "";

  switch (id) {
    case 0:
      stringNum = (number + quizScore).toLocaleString("en-US");
      break;
    case 1:
      stringNum = (number + 1).toLocaleString("en-US");
      break;
    case 2:
      stringNum = (number + 10).toLocaleString("en-US");
      break;
    case 3:
      if (activityCompleted) {
        stringNum = "89%";
      } else {
        stringNum = number.toString() + "%";
      }
      break;
  }

  return stringNum;
}

export default function StatCard({ id, icon, alt, number, stat }) {
  const { activityCompleted, quizScore } = useUserContext();
  return (
    <div className="statCardContainer">
      <img src={icon} alt={alt} />
      <p className="number">
        {numberToString(id, number, activityCompleted, quizScore)}
      </p>
      <p className="stat">{stat}</p>
    </div>
  );
}
