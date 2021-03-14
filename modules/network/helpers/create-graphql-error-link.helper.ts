import { onError as ApolloLinkError } from "@apollo/link-error";

const UNAUTHORIZED_ERROR = "Unauthorized";

export const createGraphQLErrorLink = (onError: (messages: string[]) => void) =>
  ApolloLinkError(({ graphQLErrors }) => {
    if (graphQLErrors) {
      const errors = graphQLErrors.map(({ message }) => message);

      onError(errors);
    }
  });
