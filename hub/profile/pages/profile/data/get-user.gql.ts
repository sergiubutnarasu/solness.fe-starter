import { gql } from '@apollo/client';

const GET_USER = gql`
  query GetUser {
    user {
      id
      firstName
      lastName
      email
      title
      description
    }
  }
`;
