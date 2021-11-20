import { ApolloClient, ApolloProvider } from '@apollo/client';
import { useSecurityContext } from '@solness/security';
import React, { FunctionComponent, useEffect, useMemo } from 'react';
import {
  createGraphQLAuthLink,
  createGraphQLCache,
  createGraphQLErrorLink,
  createGraphQLHttpLink,
  loginHelper,
  logoutHelper,
  refreshTokenHelper,
} from '../helpers';
import { useErrorHandler } from '../hooks';

export interface Props {
  schemaPath: string;
}

const GraphQLProvider: FunctionComponent<Props> = ({
  children,
  schemaPath,
}) => {
  const { getSession, checkToken, setAuthHandler } = useSecurityContext();
  const { handleErrors } = useErrorHandler();

  const authLink = createGraphQLAuthLink({ getSession, checkToken });
  const httpLink = createGraphQLHttpLink(schemaPath);
  const errorLink = createGraphQLErrorLink(handleErrors);
  const cache = createGraphQLCache();

  const client = useMemo(() => {
    const apolloClient = new ApolloClient({
      cache,
      link: errorLink.concat(authLink.concat(httpLink)),
    });

    return apolloClient;
  }, [cache, authLink, httpLink]);

  useEffect(() => {
    const login = loginHelper(client);
    const logout = logoutHelper(client);
    const refreshToken = refreshTokenHelper(client);

    setAuthHandler({ login, logout, refreshToken });
  }, []);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default GraphQLProvider;
