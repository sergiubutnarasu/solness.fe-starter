import { gql } from '@apollo/client';

export const LOGOUT = gql`
  mutation Logout($refreshToken: String!) {
    logout(refreshToken: $refreshToken) {
      success
      messages
    }
  }
`;
