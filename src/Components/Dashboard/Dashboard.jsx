import MissionStatus from "./MissionStatus";
import TeamProgress from "./TeamProgress";
import StatCard from "./StatCard";
import Leaderboard from "./Leaderboard";

export default function Dashboard() {
  return (
    <>
      <TeamProgress />
      <MissionStatus />
      <div>
        <StatCard />
        <StatCard />
        <StatCard />
        <StatCard />
      </div>
      <Leaderboard />
    </>
  );
}
