import { createContext, useContext } from "react";
import { SessionType } from "../types";

export interface SecurityContextProps {
  login: (username: string, password: string) => Promise<SessionType>;
  logout: () => Promise<void>;
  refreshToken: () => Promise<SessionType>;
  getSession: () => Promise<SessionType>;
  checkToken: () => Promise<void>;
}

const SecurityContext = createContext<SecurityContextProps>({
  login: () => {
    throw new Error("login is not implemented");
  },
  logout: () => {
    throw new Error("logout is not implemented");
  },
  refreshToken: () => {
    throw new Error("refreshToken is not implemented");
  },
  getSession: () => {
    throw new Error("getSession is not implemented");
  },
  checkToken: () => {
    throw new Error("checkToken is not implemented");
  },
});

export const useSecurityContext = () => useContext(SecurityContext);

export default SecurityContext;
