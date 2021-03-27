import { gql } from "@apollo/client";

export const USER_FRAGMENT = gql`
  fragment User on User {
    id
    enabled
    firstName
    lastName
    email
    role
  }
`;
