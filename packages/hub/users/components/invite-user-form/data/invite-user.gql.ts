import { ApolloError, gql } from '@apollo/client';
import {
  InviteUserInput,
  InviteUserMutation,
  InviteUserMutationVariables,
} from '@solness/generated-types';
import { useMutation } from '@solness/network';

const INVITE_USER = gql`
  mutation InviteUser($model: InviteUserInput!) {
    inviteUser(model: $model) {
      success
      messages
    }
  }
`;

export const useInviteUser = ({
  onCompleted,
  onError,
}: {
  onCompleted?: () => void;
  onError?: (error: ApolloError) => void;
} = {}) => {
  const [inviteUser, options] = useMutation<
    InviteUserMutation,
    InviteUserMutationVariables
  >(INVITE_USER, {
    onCompleted,
    onError,
  });

  const handleInviteUser = (model: InviteUserInput) =>
    inviteUser({ variables: { model } });

  return {
    inviteUser: handleInviteUser,
    ...options,
  };
};
