import RewardUnlocked from "./RewardUnlocked";
import MissionStatus from "./MissionStatus";
import { useUserContext } from "../../Context/UserContext";

export function StartMission() {
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
        <h1>Mission Accomplished!</h1>
      </div>
    );
  } else {
    return (
      <div className="missionStatusContainer">
        <MissionStatus />
      </div>
    );
  }
}
