import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { LOGIN } from '../data';

export const loginHelper =
  (client: ApolloClient<NormalizedCacheObject>) =>
  async (username: string, password: string) => {
    return await client.mutate({
      mutation: LOGIN,
      variables: { username, password },
    });
  };
