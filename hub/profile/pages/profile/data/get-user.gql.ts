import { gql } from '@apollo/client';
import { GetUserQuery, GetUserQueryVariables } from '@solness/generated-types';
import { USER_FRAGMENT } from '@solness/hub-core/data';
import { useQuery } from '@solness/network';

const GET_USER = gql`
  query GetUser {
    user {
      ...UserFragment
    }
  }

  ${USER_FRAGMENT}
`;

export const useGetUser = () => {
  const { data, ...restOptions } = useQuery<
    GetUserQuery,
    GetUserQueryVariables
  >(GET_USER);

  return {
    user: data?.user,
    ...restOptions,
  };
};
