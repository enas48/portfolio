import { createContext } from "react";
const AuthContext = createContext({
  loggedIn: null,
      token: null,
      userId: null,
      isAdmin:null,
      login: () => {},
      logout: () => {},
      theme:'dark',
      setTheme: () => {},
});
export default AuthContext;
