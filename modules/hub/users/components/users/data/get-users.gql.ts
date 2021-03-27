import { gql, useQuery } from "@apollo/client";
import { GetUsersQuery } from "~/graphql-generated/types";
import { USER_FRAGMENT } from "../../../data";

export const GET_USERS = gql`
  query GetUsers {
    allUser {
      ...User
    }
  }

  ${USER_FRAGMENT}
`;

export const useGetUsers = () => {
  const { data, ...options } = useQuery<GetUsersQuery>(GET_USERS);

  return {
    users: data?.allUser,
    ...options,
  };
};
