import { gql } from '@apollo/client';
import { useQuery } from '@solness/network';
import { GetCompanyCashDetailsQuery } from '@solness/generated-types';

export const GET_COMPANY_CASH_DETAILS = gql`
  query GetCompanyCashDetails {
    company {
      id

      initialCashIndex
      initialCashValue
    }
  }
`;

export const useGetCompanyCashDetails = () => {
  const { data, ...options } = useQuery<GetCompanyCashDetailsQuery>(
    GET_COMPANY_CASH_DETAILS,
    { fetchPolicy: 'network-only' },
  );

  return {
    cashDetails: data?.company,
    ...options,
  };
};
