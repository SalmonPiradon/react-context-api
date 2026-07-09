import { createContext } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {

  const userData = {
    username: "John",
    avatar: "https://placedog.net/100/100",
    level: "platinum",
  };

  return (
    <UserContext.Provider value={userData}>
        {children}
    </UserContext.Provider>
  );
};