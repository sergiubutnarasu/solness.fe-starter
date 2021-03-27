import { onError as ApolloLinkError } from "@apollo/client/link/error";

export const createGraphQLErrorLink = (onError: (messages: string[]) => void) =>
  ApolloLinkError(({ graphQLErrors }) => {
    if (graphQLErrors) {
      const errors = graphQLErrors.map(({ message }) => message);

      onError(errors);
    }
  });
