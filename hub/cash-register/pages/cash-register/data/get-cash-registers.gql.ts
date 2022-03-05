import { gql } from '@apollo/client';
import { useQuery } from '@solness/network';
import { GetCashRegistersQuery } from '@solness/generated-types';

export const GET_CASH_REGISTERS = gql`
  query GetCashRegisters {
    viewer {
      permissions {
        cash {
          create
        }
      }
    }

    lastEntryDate
    cashRegisters
  }
`;

export const useGetCashRegisters = () =>
  useQuery<GetCashRegistersQuery>(GET_CASH_REGISTERS);
