import { ApolloError, gql, useMutation } from '@apollo/client';
import {
  SaveUserMutation,
  SaveUserMutationVariables,
  UserInput,
} from '~/graphql-generated/types';

const SAVE_USER = gql`
  mutation SaveUser($model: UserInput!) {
    saveUser(model: $model) {
      data {
        id
      }
    }
  }
`;

export const useSaveUser = ({
  onCompleted,
  onError,
}: {
  onCompleted?: () => void;
  onError?: (error: ApolloError) => void;
} = {}) => {
  const [saveUser, options] = useMutation<
    SaveUserMutation,
    SaveUserMutationVariables
  >(SAVE_USER, {
    onCompleted,
    onError,
  });

  const handleSaveUser = (model: UserInput) =>
    saveUser({ variables: { model } });

  return {
    saveUser: handleSaveUser,
    ...options,
  };
};
