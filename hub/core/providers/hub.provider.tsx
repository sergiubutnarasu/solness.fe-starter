import { ReactNode, useState } from 'react';
import { AppUser } from '../types';
import HubContext from './hub.context';

type Props = {
  children: ReactNode;
};

const HubProvider = ({ children }: Props) => {
  const [user, setUser] = useState<AppUser>();

  return (
    <HubContext.Provider value={{ user, setUser }}>
      {children}
    </HubContext.Provider>
  );
};

export default HubProvider;
