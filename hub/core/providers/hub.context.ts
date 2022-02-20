import { createContext, useContext } from 'react';
import { HubContextProps } from '../types';

const HubContext = createContext<HubContextProps>({
  setUser: () => {
    throw new Error('Set user is not implemented');
  },
});

export const useHubContext = () => useContext(HubContext);

export default HubContext;
