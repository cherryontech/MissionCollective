import MissionStatus from "./MissionStatus";
import TeamProgress from "./TeamProgress";
import StatCard from "./StatCard";
import Leaderboard from "./Leaderboard";
import { statCardContent } from "../../data/statCards";

export default function Dashboard() {
  return (
    <>
      <TeamProgress />
      <MissionStatus />
      <div>
        {statCardContent.map(({ id, icon, alt, number, stat }) => (
          <StatCard
            key={id}
            id={id}
            icon={icon}
            alt={alt}
            number={number}
            stat={stat}
          />
        ))}
      </div>
      <Leaderboard />
    </>
  );
}
