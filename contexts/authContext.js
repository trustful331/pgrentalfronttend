import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [token, setToken] = useState(undefined);
  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };

export const useAuthContext = () => useContext(AuthContext);
