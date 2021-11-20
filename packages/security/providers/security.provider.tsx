import React, { FunctionComponent } from 'react';
import { useSecurity } from '../hooks';
import { SecurityContextProps } from '../types';
import SecurityContext from './security.context';

const SecurityProvider: FunctionComponent = ({ children }) => {
  const {
    login,
    logout,
    refreshToken,
    getSession,
    checkToken,
    setAuthHandler,
  } = useSecurity();

  const value: SecurityContextProps = {
    login,
    logout,
    refreshToken,
    getSession,
    checkToken,
    setAuthHandler,
  };

  return (
    <SecurityContext.Provider value={value}>
      {children}
    </SecurityContext.Provider>
  );
};

export default SecurityProvider;
