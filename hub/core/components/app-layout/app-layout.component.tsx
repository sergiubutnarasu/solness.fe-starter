import { ChakraProvider } from '@chakra-ui/react';
import { GraphQLProvider } from '@solness/network';
import { SecurityProvider } from '@solness/security';
import { useRouter } from 'next/router';
import React, { FunctionComponent, useMemo } from 'react';
import { ApiPath } from '../../configs';
import ErrorBoundary from '../error-boundary';
import HubLayout from '../hub-layout';

const AppLayout: FunctionComponent = ({ children }) => {
  const { pathname } = useRouter();

  const content = useMemo(() => {
    const isLoginPage = pathname === '/login';

    if (isLoginPage) {
      return <>{children}</>;
    }

    return <HubLayout>{children}</HubLayout>;
  }, [children, pathname]);

  return (
    <ErrorBoundary>
      <SecurityProvider>
        <GraphQLProvider schemaPath={ApiPath.graphQLSchemaPath}>
          <ChakraProvider>{content}</ChakraProvider>
        </GraphQLProvider>
      </SecurityProvider>
    </ErrorBoundary>
  );
};

export default AppLayout;
