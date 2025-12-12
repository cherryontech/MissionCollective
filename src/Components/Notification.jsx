import search from "../assets/icons/search.svg";
import { useState } from "react";
import { useNotification } from "../Context/NotificationContext";
import { useUserContext } from "../Context/UserContext";
import "../styles/Notification.css";

export default function Notification() {
  const { notifications, isOverlayVisible } = useNotification();
  const { missionCompleted, setRewardViewed } = useUserContext();
  const [showAll, setShowAll] = useState(false);

  if (!isOverlayVisible) return null;

  const visibleNotifications = showAll
    ? notifications
    : notifications.slice(0, 3);

  return (
    <div
      className={`notification-overlay ${showAll ? "show-all" : ""}`}
      onClick={() => {
        if (missionCompleted) {
          setRewardViewed(true);
        }
      }}
    >
      <h2>Notifications</h2>
      <div className="notification-search">
        <span className="search-label">Search</span>
        <input
          type="text"
          className="search-input"
          placeholder="What are you looking for?"
        />
        <img className="search-icon" src={search} alt="search icon" />
      </div>
      <div className="notification-list">
        {visibleNotifications.map(({ message, img, time }, idx) => (
          <div className="notification-item" key={`${time}-${idx}`}>
            <p className="notification-message">{message}</p>
            {img && <img src={img} alt="notification icon" />}
            <div className="notification-date">{time}</div>
          </div>
        ))}
      </div>
      {notifications.length > 3 && (
        <div
          className="view-all-text"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Show Less" : "View All"}
        </div>
      )}
    </div>
  );
}
