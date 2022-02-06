import { ApolloError, gql } from '@apollo/client';
import { useMutation } from '@solness/network';
import {
  CheckResetPasswordTokenMutation,
  CheckResetPasswordTokenMutationVariables,
} from '@solness/generated-types';

const CHECK_RESET_PASSWORD_TOKEN = gql`
  mutation CheckResetPasswordToken($token: String!) {
    checkResetPasswordToken(token: $token) {
      success
      messages
    }
  }
`;

export const useCheckResetPasswordToken = ({
  onCompleted,
  onError,
}: {
  onCompleted?: (data: CheckResetPasswordTokenMutation) => void;
  onError?: (error: ApolloError) => void;
} = {}) => {
  const [checkResetPasswordToken, options] = useMutation<
    CheckResetPasswordTokenMutation,
    CheckResetPasswordTokenMutationVariables
  >(CHECK_RESET_PASSWORD_TOKEN, {
    onCompleted,
    onError,
  });

  const handleCheckResetPasswordToken = (token: string) =>
    checkResetPasswordToken({ variables: { token } });

  return {
    checkResetPasswordToken: handleCheckResetPasswordToken,
    ...options,
  };
};
