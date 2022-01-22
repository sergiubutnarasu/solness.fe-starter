import { gql } from '@apollo/client';
import {
  GetCompanyUserQuery,
  GetCompanyUserQueryVariables,
} from '@solness/generated-types';
import { useQuery } from '@solness/network';
import { USER_FRAGMENT } from '../../../data';

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
