import { ApolloError, gql, useMutation } from '@apollo/client';
import {
  CreateUserMutation,
  CreateUserMutationVariables,
  UserInput,
} from '@solness/generated-types';

const CREATE_USER = gql`
  mutation CreateUser($model: UserInput!) {
    createUser(model: $model) {
      data {
        id
      }
    }
  }
`;

export const useCreateUser = ({
  onCompleted,
  onError,
}: {
  onCompleted?: () => void;
  onError?: (error: ApolloError) => void;
} = {}) => {
  const [createUser, options] = useMutation<
    CreateUserMutation,
    CreateUserMutationVariables
  >(CREATE_USER, {
    onCompleted,
    onError,
  });

  const handleCreateUser = (model: UserInput) =>
    createUser({ variables: { model } });

  return {
    createUser: handleCreateUser,
    ...options,
  };
};
