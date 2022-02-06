import { ApolloError, gql } from '@apollo/client';
import {
  SendResetPasswordEmailMutation,
  SendResetPasswordEmailMutationVariables,
} from '@solness/generated-types';
import { useMutation } from '@solness/network';

const SEND_RESET_PASSWORD_EMAIL = gql`
  mutation SendResetPasswordEmail($email: String!) {
    sendResetPasswordEmail(email: $email) {
      success
      messages
    }
  }
`;

export const useSendResetPasswordEmail = ({
  onCompleted,
  onError,
}: {
  onCompleted?: (data: SendResetPasswordEmailMutation) => void;
  onError?: (error: ApolloError) => void;
} = {}) => {
  const [sendResetPasswordEmail, options] = useMutation<
    SendResetPasswordEmailMutation,
    SendResetPasswordEmailMutationVariables
  >(SEND_RESET_PASSWORD_EMAIL, {
    onCompleted,
    onError,
  });

  const handleSendResetPasswordEmail = (email: string) =>
    sendResetPasswordEmail({ variables: { email } });

  return {
    sendResetPasswordEmail: handleSendResetPasswordEmail,
    ...options,
  };
};
