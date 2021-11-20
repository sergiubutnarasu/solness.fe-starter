import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { REFRESH_TOKEN } from '../data';

export const refreshTokenHelper =
  (client: ApolloClient<NormalizedCacheObject>) =>
  async (refreshToken: string, accessToken: string) => {
    return await client.mutate({
      mutation: REFRESH_TOKEN,
      variables: { refreshToken, accessToken },
    });
  };
