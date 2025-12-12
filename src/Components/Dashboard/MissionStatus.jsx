import RewardUnlocked from "./RewardUnlocked";
import MissionStart from "./MissionStart";
import { useUserContext } from "../../Context/UserContext";
import MissionAccomplish from "./MissionAccomplish";

export default function MissionStatus() {
  const { activityCompleted, missionCompleted, rewardViewed } =
    useUserContext();

  if (missionCompleted && rewardViewed) {
    return (
      <div className="missionStatusContainer">
        <RewardUnlocked />
      </div>
    );
  }

  if (missionCompleted) {
    return (
      <div className="missionStatusContainer">
        <MissionAccomplish />
      </div>
    );
  }

  if (activityCompleted) {
    return (
      <div className="missionStatusContainer">
        <MissionAccomplish />
      </div>
    );
  }

  return (
    <div className="missionStatusContainer">
      <MissionStart />
    </div>
  );
}
