import { gql } from '@apollo/client';

export const REFRESH_TOKEN = gql`
  mutation RefreshToken($refreshToken: String!, $accessToken: String!) {
    refresh(refreshToken: $refreshToken, accessToken: $accessToken) {
      success
      messages
      data {
        accessToken
        expiresIn
        refreshToken
      }
    }
  }
`;
