import { useContext, createContext, useState } from "react";

export const defaultState = {
  activityCompleted: false,
  setActivityCompleted: () => {},
};

export const UserContext = createContext(defaultState);

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [activityCompleted, setActivityCompleted] = useState(false);
  const value = {
    activityCompleted,
    setActivityCompleted,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
