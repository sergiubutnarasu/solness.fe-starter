import { gql } from '@apollo/client';
import { useQuery } from '@solness/network';
import { GetCompanyQuery } from '@solness/generated-types';

const GET_COMPANY = gql`
  query GetCompany {
    viewer {
      permissions {
        company {
          update
        }
      }
    }
    company {
      ...CompanyFragment
    }
  }

  fragment CompanyFragment on Company {
    id
    name
    slogan
    description
    registerNumber
    email
    phone
  }
`;

export const useGetCompany = () => {
  const { data, ...options } = useQuery<GetCompanyQuery>(GET_COMPANY);

  return {
    company: data?.company,
    allowUpdateCompany: Boolean(data?.viewer.permissions.company.update),
    ...options,
  };
};
