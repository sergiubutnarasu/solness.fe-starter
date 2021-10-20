import { InMemoryCache } from "@apollo/client";

export const createGraphQLCache = () => {
  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          allUser: {
            merge(_, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  });

  return cache;
};
