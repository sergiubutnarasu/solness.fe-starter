import { ApolloError, gql } from '@apollo/client';
import {
  ChangePasswordInput,
  ChangePasswordMutation,
  ChangePasswordMutationVariables,
} from '@solness/generated-types';
import { useMutation } from '@solness/network';

const CHANGE_PASSWORD = gql`
  mutation ChangePassword($model: ChangePasswordInput!) {
    changePassword(model: $model) {
      success
      messages
    }
  }
`;

export const useChangePassword = ({
  onCompleted,
  onError,
}: {
  onCompleted?: (data: ChangePasswordMutation) => void;
  onError?: (error: ApolloError) => void;
} = {}) => {
  const [changePassword, options] = useMutation<
    ChangePasswordMutation,
    ChangePasswordMutationVariables
  >(CHANGE_PASSWORD, {
    onCompleted,
    onError,
  });

  const handleChangePassword = (model: ChangePasswordInput) =>
    changePassword({ variables: { model } });

  return {
    changePassword: handleChangePassword,
    ...options,
  };
};
