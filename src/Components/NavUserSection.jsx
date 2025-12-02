import starRounded from "../assets/icons/starRounded.svg";
import notifyEmpty from "../assets/icons/notifyEmpty.svg";
import profile from "../assets/images/navbar/profile.png";
import "../styles/NavUserSection.css";
import { useUserContext } from "../Context/UserContext";

export default function NavUserSection() {
  const { quizScore, setMissionCompleted } = useUserContext();

  return (
    <div className="NavUserContainer">
      <div className="NavUserPointsContainer">
        <img src={starRounded} alt="star icon" />
        <span className="NavUserPointsText">{230 + quizScore}</span>
      </div>
      <div className="NavUserBellIcon">
        <button
          className="iconButton"
          onClick={() => setMissionCompleted(true)}
        >
          <img src={notifyEmpty} alt="notification bell icon" />
        </button>
      </div>
      <div className="NavUserProfileContainer">
        <img src={profile} alt="user profile icon" />

        <span className="NavUserName">Lisa P.</span>
      </div>
    </div>
  );
}
