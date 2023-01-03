import { createContext } from "react";
const AuthContext = createContext({
    loggedin: null,
    isAdmin:false
  });
export default AuthContext;
