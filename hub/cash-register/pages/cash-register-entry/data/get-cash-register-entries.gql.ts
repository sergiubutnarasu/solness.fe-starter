import { gql } from '@apollo/client';
import { useQuery } from '@solness/network';
import {
  GetCashRegisterEntriesQuery,
  GetCashRegisterEntriesQueryVariables,
} from '@solness/generated-types';

const GET_CASH_REGISTER_ENTRIES = gql`
  query GetCashRegisterEntries($date: DateTime!) {
    cashRegisterEntries(date: $date) {
      previousTotalValue
      previousEntriesCount
      entries {
        id
        date
        docNumber
        annexNumber
        description
        value
      }
    }
  }
`;

interface Props {
  date?: string;
  skip?: boolean;
}

export const useGetCashRegisterEntries = ({ date, skip }: Props) => {
  const { data, ...options } = useQuery<
    GetCashRegisterEntriesQuery,
    GetCashRegisterEntriesQueryVariables
  >(GET_CASH_REGISTER_ENTRIES, { skip, variables: { date } });

  return {
    data: data?.cashRegisterEntries,
    ...options,
  };
};
