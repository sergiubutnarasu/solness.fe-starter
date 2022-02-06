import { ApolloError, gql } from '@apollo/client';
import {
  ResetPasswordMutation,
  ResetPasswordMutationVariables,
} from '@solness/generated-types';
import { useMutation } from '@solness/network';

const RESET_PASSWORD = gql`
  mutation ResetPassword($token: String!, $newPassword: String!) {
    resetPassword(token: $token, newPassword: $newPassword) {
      success
      messages
    }
  }
`;

export const useResetPassword = ({
  onCompleted,
  onError,
}: {
  onCompleted?: (data: ResetPasswordMutation) => void;
  onError?: (error: ApolloError) => void;
} = {}) => {
  const [resetPassword, options] = useMutation<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >(RESET_PASSWORD, {
    onCompleted,
    onError,
  });

  const handleResetPassword = (token: string, newPassword: string) =>
    resetPassword({ variables: { token, newPassword } });

  return {
    resetPassword: handleResetPassword,
    ...options,
  };
};
