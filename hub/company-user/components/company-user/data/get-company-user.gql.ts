import { gql } from '@apollo/client';
import {
  GetCompanyUserQuery,
  GetCompanyUserQueryVariables,
} from '@solness/generated-types';
import { USER_FRAGMENT } from '@solness/hub-core/data';
import { useQuery } from '@solness/network';

const GET_COMPANY_USER = gql`
  query GetCompanyUser($companyUserId: Float!) {
    viewer {
      permissions {
        company {
          excludeUser
        }
      }
    }
    companyUser(id: $companyUserId) {
      id
      verified
      roles
      user {
        ...UserFragment
      }
    }
  }

  ${USER_FRAGMENT}
`;

export const useGetCompanyUser = (companyUserId: number) => {
  const { data, ...restOptions } = useQuery<
    GetCompanyUserQuery,
    GetCompanyUserQueryVariables
  >(GET_COMPANY_USER, {
    variables: { companyUserId },
  });

  return {
    companyUser: data?.companyUser,
    allowExcludeUser: Boolean(data?.viewer.permissions.company.excludeUser),
    ...restOptions,
  };
};
