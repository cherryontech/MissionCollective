import MissionStatus from "./MissionStatus";
import "../../styles/Dashboard.css";
import TeamProgress from "./TeamProgress";
import StatCard from "./StatCard";
import Leaderboard from "./Leaderboard";
import { statCardContent } from "../../data/statCards";
import { useUserContext } from "../../Context/UserContext";

export default function Dashboard() {
  const { activityCompleted, missionCompleted } = useUserContext();
  return (
    <>
      <div className="dashboardContainer">
        <div className="progressMissionSection">
        <TeamProgress />
        <MissionStatus />
        </div>
        <div className="statCards">
          {statCardContent.map(
            ({
              id,
              icon,
              alt,
              initialNumber,
              activityNumber,
              rewardNumber,
              stat,
            }) => (
              <StatCard
                key={id}
                id={id}
                icon={icon}
                alt={alt}
                number={
                  missionCompleted
                    ? rewardNumber
                    : activityCompleted
                      ? activityNumber
                      : initialNumber
                }
                stat={stat}
              />
            )
          )}
        </div>
        <Leaderboard />
      </div>
    </>
  );
}
