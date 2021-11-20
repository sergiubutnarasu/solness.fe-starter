import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { LOGOUT } from '../data';

export const logoutHelper =
  (client: ApolloClient<NormalizedCacheObject>) =>
  async (refreshToken: string) => {
    return await client.mutate({
      mutation: LOGOUT,
      variables: { refreshToken },
    });
  };
