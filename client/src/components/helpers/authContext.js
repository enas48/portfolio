import { createContext } from "react";
const AuthContext = createContext({
  loggedIn: null,
      token: null,
      userId: null,
      isAdmin:null,
      login: () => {},
      logout: () => {},
});
export default AuthContext;
