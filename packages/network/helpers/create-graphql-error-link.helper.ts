import { NextLink, Operation } from '@apollo/client';
import { onError as ApolloLinkError } from '@apollo/client/link/error';
import { GraphQLError } from 'graphql';

export const createGraphQLErrorLink = (
  onError: (
    errors: readonly GraphQLError[],
    operation: Operation,
    forward: NextLink,
  ) => void,
) =>
  ApolloLinkError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      return onError(graphQLErrors, operation, forward);
    }
  });
