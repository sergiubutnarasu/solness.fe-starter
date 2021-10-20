import React, {
  FunctionComponent,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { Layout } from '@solness/ui';
import { useSecurityContext } from '@solness/security';
import Menu from '../menu';
import Sidebar from '../sidebar';

export interface Props {
  children: ReactNode;
}

const HubLayout: FunctionComponent<Props> = ({ children }) => {
  const { getSession } = useSecurityContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();

      if (!session) {
        window.location.href = '/login';
      } else {
        setIsLoading(false);
      }
    };

    checkSession();
  }, [getSession, setIsLoading]);

  if (isLoading) {
    return null; // TODO - display loading
  }

  return (
    <Layout menu={<Menu />} sidebar={<Sidebar />}>
      {children}
    </Layout>
  );
};

export default HubLayout;
