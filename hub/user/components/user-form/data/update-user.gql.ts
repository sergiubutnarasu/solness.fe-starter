import { ApolloError, gql } from '@apollo/client';
import {
  UpdateUserMutation,
  UpdateUserMutationVariables,
  UserInput,
} from '@solness/generated-types';
import { useMutation } from '@solness/network';

const UPDATE_USER = gql`
  mutation UpdateUser($model: UserInput!) {
    updateUser(model: $model) {
      success
      messages
    }
  }
`;

export const useUpdateUser = ({
  onCompleted,
  onError,
}: {
  onCompleted?: () => void;
  onError?: (error: ApolloError) => void;
} = {}) => {
  const [updateUser, options] = useMutation<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >(UPDATE_USER, {
    onCompleted,
    onError,
  });

  const handleUpdateUser = (model: UserInput) =>
    updateUser({ variables: { model } });

  return {
    updateUser: handleUpdateUser,
    ...options,
  };
};
