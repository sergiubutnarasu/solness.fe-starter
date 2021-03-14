import { gql, useQuery } from "@apollo/client";
import { GetUsersQuery } from "~/graphql-generated/types";

const GET_USERS = gql`
  query GetUsers {
    allUser {
      id
      email
    }
  }
`;

export const useGetUsers = () => {
  const { data, ...options } = useQuery<GetUsersQuery>(GET_USERS);

  return {
    users: data?.allUser,
    ...options,
  };
};
