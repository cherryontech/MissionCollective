import search from "../assets/icons/search.svg";
import { useState, useEffect, useRef } from "react";
import { useNotification } from "../Context/NotificationContext";
import { useUserContext } from "../Context/UserContext";
import "../styles/Notification.css";

export default function Notification() {
  const { notifications, isOverlayVisible, toggleOverlay } = useNotification();
  const { setMissionCompleted, missionCompleted, activityCompleted } =
    useUserContext();
  const [showAll, setShowAll] = useState(false);

  const panelRef = useRef(null);

  useEffect(() => {
    if (!isOverlayVisible) return;

    const handleClickOutside = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        toggleOverlay();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOverlayVisible, toggleOverlay]);

  if (!isOverlayVisible) return null;

  const visibleNotifications = showAll
    ? notifications
    : notifications.slice(0, 3);

  return (
    <div className="notification-overlay" ref={panelRef}>
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
        {visibleNotifications.map(({ message, highlight, img, time }, idx) => {
          const parts = highlight ? message.split(highlight) : [message];

          return (
            <div
              className={`notification-item ${img ? "has-image" : "no-image"}`}
              key={`${time}-${idx}`}
            >
              <p
                className="notification-message"
                onClick={() => {
                  if (activityCompleted && !missionCompleted) {
                    setMissionCompleted(true);
                    toggleOverlay();
                  }
                }}
              >
                {parts[0]}
                {highlight && <strong>{highlight}</strong>}
                {parts[1] || ""}
              </p>
              {img && <img src={img} alt="notification icon" />}
              <div className="notification-date">{time}</div>
            </div>
          );
        })}

        {notifications.length > 3 && (
          <div
            className="view-all-text"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Show Less" : "View All"}
          </div>
        )}
      </div>
    </div>
  );
}
