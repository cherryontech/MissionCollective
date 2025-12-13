import RewardUnlocked from "./RewardUnlocked";
import MissionStart from "./MissionStart";
import { useUserContext } from "../../Context/UserContext";
import MissionAccomplish from "./MissionAccomplish";

export default function MissionStatus() {
  const { activityCompleted, missionCompleted } = useUserContext();

  if (activityCompleted && missionCompleted) {
    return (
      <div className="missionStatusContainer">
        <RewardUnlocked />
      </div>
    );
  } else if (activityCompleted) {
    return (
      <div className="missionStatusContainer">
        <MissionAccomplish />
      </div>
    );
  } else {
    return (
      <div className="missionStatusContainer">
        <MissionStart />
      </div>
    );
  }
}
