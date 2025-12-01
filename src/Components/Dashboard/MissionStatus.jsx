import RewardUnlocked from "./RewardUnlocked";
import { useUserContext } from "../../Context/UserContext";

export default function MissionStatus() {
  const { activityCompleted, missionCompleted } = useUserContext();

  if (missionCompleted) {
    return (
      <div className="missionStatusContainer">
        <RewardUnlocked />
      </div>
    );
  } else if (activityCompleted) {
    return <h1>Mission Accomplished!</h1>;
  } else {
    return <h1>Start a New Mission</h1>;
  }
}
