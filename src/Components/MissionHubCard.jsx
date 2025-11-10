import calendar from "../assets/icons/missionHub/calendar.svg";
import completed from "../assets/icons/missionHub/completed.svg";
import idea from "../assets/icons/missionHub/idea.svg";
import masks from "../assets/icons/missionHub/masks.svg";
import olympics from "../assets/icons/missionHub/olympics.svg";
import scale from "../assets/icons/missionHub/scale.svg";
import team from "../assets/icons/missionHub/team.svg";
import world from "../assets/icons/missionHub/world.svg";
import clock from "../assets/icons/missionHub/clock.svg";
import starCircle from "../assets/icons/starCircle.svg";
import { cardContent } from "../data/missionHubCards";

export default function MissionHubCard() {
  return (
    <div>
      <img src={calendar} alt="calendar icon" />
      <h2>{cardContent[0].headline}</h2>
      <p>{cardContent[0].body}</p>
      <div>
        <img src={clock} alt="clock icon" />
        <p>{cardContent[0].info}</p>
      </div>
      <div>
        <img src={starCircle} alt="star icon" />
        <p>{cardContent[0].numCompleted}/5 teammates completed</p>
      </div>
      <button>Button Text</button>
    </div>
  );
}
