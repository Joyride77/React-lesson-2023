import { createContext } from "react";

const UserContext = createContext(null);

/// Provider
const UserProvider = ({ children }) => {
  const userName = "Shine suu";
  return (
    <UserContext.Provider value={userName}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserProvider };

/// Consumer
