import { gql } from '@apollo/client';
import { GetCompanyUsersQuery } from '@solness/generated-types';
import { useQuery } from '@solness/network';
import { USER_FRAGMENT } from './user-fragment.gql';

export const GET_COMPANY_USERS = gql`
  query GetCompanyUsers {
    viewer {
      permissions {
        company {
          inviteUser
        }
      }
    }
    company {
      id
      users {
        data {
          ...CompanyUserFragment
        }
      }
    }
  }

  fragment CompanyUserFragment on CompanyUser {
    id
    roles
    user {
      ...UserFragment
    }
  }

  ${USER_FRAGMENT}
`;

export const useGetCompanyUsers = () => {
  const { data, ...options } =
    useQuery<GetCompanyUsersQuery>(GET_COMPANY_USERS);

  return {
    companyUsers: data?.company?.users?.data ?? [],
    allowInviteUser: Boolean(data?.viewer.permissions.company.inviteUser),
    ...options,
  };
};
