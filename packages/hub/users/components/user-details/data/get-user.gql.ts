import { gql } from '@apollo/client';
import { GetUserQuery, GetUserQueryVariables } from '@solness/generated-types';
import { useQuery } from '@solness/network';
import { USER_FRAGMENT } from '../../../data';

const GET_USER = gql`
  query GetUser($userId: Float!) {
    user(id: $userId) {
      ...User
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

  return { user: data?.user, ...restOptions };
};
