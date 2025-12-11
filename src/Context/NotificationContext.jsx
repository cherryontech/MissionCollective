import React, { createContext, useContext, useState } from "react";
import { notificationData } from "../data/notificationData";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => setIsOverlayVisible((prev) => !prev);

  return (
    <NotificationContext.Provider
      value={{
        notifications: notificationData,
        isOverlayVisible,
        toggleOverlay,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export const useNotification = () => useContext(NotificationContext);
