import { gql, useQuery } from '@apollo/client';
import { GetUsersQuery } from '../../../../graphql-generated/types';
import { USER_FRAGMENT } from './user-fragment.gql';

export const GET_USERS = gql`
  query GetUsers {
    allUser {
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
    users: data?.allUser?.data,
    ...options,
  };
};
