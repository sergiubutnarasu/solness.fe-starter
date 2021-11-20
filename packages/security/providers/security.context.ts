import { createContext, useContext } from 'react';
import { SecurityContextProps } from '../types';

const SecurityContext = createContext<SecurityContextProps>({
  login: () => {
    throw new Error('login is not implemented');
  },
  logout: () => {
    throw new Error('logout is not implemented');
  },
  refreshToken: () => {
    throw new Error('refreshToken is not implemented');
  },
  getSession: () => {
    throw new Error('getSession is not implemented');
  },
  checkToken: () => {
    throw new Error('checkToken is not implemented');
  },
  setAuthHandler: () => {
    throw new Error('setAuthHandler is not implemented');
  },
});

export const useSecurityContext = () => useContext(SecurityContext);

export default SecurityContext;
