import search from "../Assets/icons/search.svg";
import { notificationData } from "../data/notificationData";

export default function Notification() {
  return (
    <div className="notification-container">
      <h2>Notifications</h2>
      <div>
        <input
          type="text"
          className="search-input"
          placeholder="What are you looking for?"
        />
        <img src={search} alt="search icon" />
      </div>
      <div className="notification-list">
        {notificationData.map(({ message, img, time }, idx) => (
          <div className="notification-item" key={`${time}-${idx}`}>
            <p className="notification-message">{message}</p>
            <img src={img} alt="notification icon" />
            <p className="notification-date">{time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
