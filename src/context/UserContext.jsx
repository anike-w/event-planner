import { createContext, useState } from "react";

// Create the User Context
export const UserContext = createContext();

function UserProvider({ children }) {
  // Stores the registered user's information
  const [user, setUser] = useState(null);

  // Tracks whether the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;