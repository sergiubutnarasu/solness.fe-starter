import React, { FunctionComponent } from "react";
import { useSecurity } from "../hooks";
import SecurityContext, { SecurityContextProps } from "./security.context";

export interface Props {
  loginPath: string;
  logoutPath: string;
  refreshTokenPath: string;
}

const SecurityProvider: FunctionComponent<Props> = ({
  children,
  loginPath,
  logoutPath,
  refreshTokenPath,
}) => {
  const { login, logout, refreshToken, getSession, checkToken } = useSecurity({
    loginPath,
    logoutPath,
    refreshTokenPath,
  });

  const value: SecurityContextProps = {
    login,
    logout,
    refreshToken,
    getSession,
    checkToken,
  };

  return (
    <SecurityContext.Provider value={value}>
      {children}
    </SecurityContext.Provider>
  );
};

export default SecurityProvider;
