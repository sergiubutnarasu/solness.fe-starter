import { ApolloError, gql } from '@apollo/client';
import {
  ExcludeUserMutation,
  ExcludeUserMutationVariables,
} from '@solness/generated-types';
import { useMutation } from '@solness/network';
import { GET_COMPANY_USERS } from '../../../data';

const EXCLUDE_USER = gql`
  mutation ExcludeUser($userId: Float!) {
    excludeUser(userId: $userId) {
      success
      messages
    }
  }
`;

export const useExcludeUser = ({
  onCompleted,
  onError,
}: {
  onCompleted?: () => void;
  onError?: (error: ApolloError) => void;
} = {}) => {
  const [excludeUser, restOptions] = useMutation<
    ExcludeUserMutation,
    ExcludeUserMutationVariables
  >(EXCLUDE_USER, {
    onCompleted,
    onError,
    refetchQueries: [{ query: GET_COMPANY_USERS }],
  });

  const handleExcludeUser = async (userId: number) => {
    await excludeUser({ variables: { userId } });
  };

  return {
    excludeUser: handleExcludeUser,
    ...restOptions,
  };
};
