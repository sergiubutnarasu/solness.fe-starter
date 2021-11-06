import { gql, useQuery } from '@apollo/client';
import { GetUsersQuery } from '@solness/generated-types';
import { USER_FRAGMENT } from './user-fragment.gql';

export const GET_USERS = gql`
  query GetUsers {
    users {
      data {
        ...User
      }
    }
  }

  ${USER_FRAGMENT}
`;

export const useGetUsers = () => {
  const { data, ...options } = useQuery<GetUsersQuery>(GET_USERS);

  return {
    users: data?.users?.data,
    ...options,
  };
};
