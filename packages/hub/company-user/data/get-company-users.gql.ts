import { gql } from '@apollo/client';
import { GetCompanyUsersQuery } from '@solness/generated-types';
import { useQuery } from '@solness/network';
import { USER_FRAGMENT } from './user-fragment.gql';

export const GET_COMPANY_USERS = gql`
  query GetCompanyUsers {
    company {
      id
      users {
        data {
          id
          roles
          user {
            ...UserFragment
          }
        }
      }
    }
  }

  ${USER_FRAGMENT}
`;

export const useGetCompanyUsers = () => {
  const { data, ...options } =
    useQuery<GetCompanyUsersQuery>(GET_COMPANY_USERS);

  return {
    users: data?.company?.users?.data ?? [],
    ...options,
  };
};
