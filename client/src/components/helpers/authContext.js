import { createContext } from "react";
const AuthContext = createContext({
    loggedin: null,
    isAdmin:false,
    userId:null
  });
export default AuthContext;
