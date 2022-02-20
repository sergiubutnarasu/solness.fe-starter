import { ErrorBoundary, HubProvider } from '@solness/hub-core';
import { useSecurityContext } from '@solness/security';
import { Layout } from '@solness/ui';
import React, {
  FunctionComponent,
  ReactNode,
  useEffect,
  useState,
} from 'react';
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
    return <>loading app</>; // TODO - display loading
  }

  return (
    <HubProvider>
      <Layout menu={<Menu />} sidebar={<Sidebar />}>
        <ErrorBoundary>{children}</ErrorBoundary>
      </Layout>
    </HubProvider>
  );
};

export default HubLayout;
