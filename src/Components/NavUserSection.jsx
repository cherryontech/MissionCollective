import starRounded from "../assets/icons/starRounded.svg";
import profile from "../assets/images/navbar/profile.png";
import notificationBell from "../assets/icons/notificationBell.svg";
import notificationBellEmpty from "../assets/icons/notificationBellEmpty.svg";
import notificationBellSolid from "../assets/icons/notificationBellSolid.svg";
import "../styles/NavUserSection.css";
import { useUserContext } from "../Context/UserContext";
import { useNotification } from "../Context/NotificationContext";

export default function NavUserSection() {
  const {
    quizScore,
    activityCompleted,
    missionCompleted,
    setMissionCompleted,
  } = useUserContext();

  const { toggleOverlay } = useNotification();

  const handleBellClick = () => {
    if (!activityCompleted) return;

    if (!missionCompleted) {
      setMissionCompleted(true);
    }
    toggleOverlay();
  };

  function getImageSrc() {
    if (missionCompleted) return notificationBellSolid;
    if (activityCompleted) return notificationBell;
    return notificationBellEmpty;
  }

  return (
    <div className="NavUserContainer">
      <div className="NavUserPointsContainer">
        <img src={starRounded} alt="star icon" />
        <span className="NavUserPointsText">{230 + quizScore}</span>
      </div>
      <div className="NavUserBellIcon">
        <button
          className={`iconButton ${!activityCompleted ? "disabled-bell" : ""}`}
          onClick={handleBellClick}
          disabled={!activityCompleted}
          aria-label="Toggle notifications"
        >
          <img
            src={getImageSrc()}
            alt={
              activityCompleted
                ? "notification bell icon with notification"
                : "empty notification bell icon"
            }
          />
        </button>
      </div>
      <div className="NavUserProfileContainer">
        <img src={profile} alt="user profile icon" />

        <span className="NavUserName">Lisa P.</span>
      </div>
    </div>
  );
}
