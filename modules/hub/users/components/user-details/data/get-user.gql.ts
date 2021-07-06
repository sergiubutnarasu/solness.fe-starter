import { gql, useQuery } from "@apollo/client";
import { GetUserQuery, GetUserQueryVariables } from "~/graphql-generated/types";
import { USER_FRAGMENT } from "../../../data";

const GET_USER = gql`
  query GetUser($userId: Float!) {
    getUser(id: $userId) {
      data {
        ...User
      }
    }
  }

  ${USER_FRAGMENT}
`;

export const useGetUser = (userId: number) => {
  const { data, ...restOptions } = useQuery<
    GetUserQuery,
    GetUserQueryVariables
  >(GET_USER, {
    variables: { userId },
  });

  return { user: data?.getUser.data, ...restOptions };
};
