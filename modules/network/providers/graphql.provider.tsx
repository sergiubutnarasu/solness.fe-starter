import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React, { FunctionComponent, useEffect, useMemo, useState } from "react";
import { useSecurityContext } from "~/modules/security";
import {
  createGraphQLAuthLink,
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

  const client = useMemo(
    () =>
      new ApolloClient({
        link: errorLink.concat(authLink.concat(httpLink)),
        cache: new InMemoryCache(),
      }),
    [authLink, httpLink]
  );

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default GraphQLProvider;
