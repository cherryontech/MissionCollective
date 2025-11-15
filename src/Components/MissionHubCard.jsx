import "../styles/MissionHubCard.css";
import clock from "../assets/icons/missionHub/clock.svg";
import starCircle from "../assets/icons/starCircle.svg";
import { cardContent } from "../data/missionHubCards";

const buttonText = {
  beforeActivity: "View Mission Briefing",
  afterActivity: "View Team Contributions",
};

export default function MissionHubCard() {
  return (
    <div className="cardContainer">
      <img
        src={cardContent[0].icon}
        alt={cardContent[0].alt}
        className="cardIcon"
      />
      <h2>{cardContent[0].headline}</h2>
      <p>{cardContent[0].body}</p>
      <div className="infoSection">
        <img src={clock} alt="clock icon" className="inlineIcon" />
        <p>
          {cardContent[0].minutes}
          <span>•</span>
          {cardContent[0].points}
        </p>
      </div>
      <div className="teammatesSection">
        <img src={starCircle} alt="star icon" className="inlineIcon" />
        <p>{cardContent[0].numCompleted}/5 teammates completed</p>
      </div>
      <button>{buttonText.beforeActivity}</button>
    </div>
  );
}
