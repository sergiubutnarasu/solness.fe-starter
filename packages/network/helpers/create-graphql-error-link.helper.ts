import { onError as ApolloLinkError } from '@apollo/client/link/error';
import { GraphQLError } from 'graphql';

export const createGraphQLErrorLink = (
  onError: (errors: readonly GraphQLError[]) => void,
) =>
  ApolloLinkError(({ graphQLErrors }) => {
    if (graphQLErrors) {
      onError(graphQLErrors);
    }
  });
