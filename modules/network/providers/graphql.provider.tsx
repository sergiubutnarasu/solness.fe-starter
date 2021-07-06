import { ApolloClient, ApolloProvider } from "@apollo/client";
import React, { FunctionComponent, useMemo } from "react";
import { useSecurityContext } from "~/modules/security";
import {
  createGraphQLAuthLink,
  createGraphQLCache,
  createGraphQLErrorLink,
  createGraphQLHttpLink,
} from "../helpers";
import { useErrorHandler } from "../hooks";

export interface Props {
  schemaPath: string;
}

const GraphQLProvider: FunctionComponent<Props> = ({
  children,
  schemaPath,
}) => {
  const { getSession, checkToken } = useSecurityContext();
  const { handleErrors } = useErrorHandler();

  const authLink = createGraphQLAuthLink({ getSession, checkToken });
  const httpLink = createGraphQLHttpLink(schemaPath);
  const errorLink = createGraphQLErrorLink(handleErrors);
  const cache = createGraphQLCache();

  const client = useMemo(
    () =>
      new ApolloClient({
        cache,
        link: errorLink.concat(authLink.concat(httpLink)),
      }),
    [authLink, httpLink]
  );

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default GraphQLProvider;
