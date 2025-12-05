import RewardUnlocked from "./RewardUnlocked";
import { useUserContext } from "../../Context/UserContext";
import MissionAccomplish from "./MissionAccomplish";

export default function MissionStatus() {
  const { activityCompleted, missionCompleted } = useUserContext();

  if (missionCompleted) {
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
        <h1>Start a New Mission</h1>
      </div>
    );
  }
}
