import { useState, useEffect } from "react";
import AuthContext from "./authContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const admin = localStorage.getItem('admin');
    if (token ) {
      setUser({loggedin: true, isAdmin:admin });
    }
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
