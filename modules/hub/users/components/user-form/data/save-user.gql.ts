import { ApolloError, gql, useMutation } from "@apollo/client";
import {
  SaveUserMutation,
  SaveUserMutationVariables,
  UserInput,
} from "~/graphql-generated/types";

const SAVE_USER = gql`
  mutation SaveUser($model: UserInput!) {
    saveUser(model: $model) {
      id
    }
  }
`;

export const useSaveUser = () => {
  const [saveUser, options] = useMutation<
    SaveUserMutation,
    SaveUserMutationVariables
  >(SAVE_USER, {
    onError: (error: ApolloError) => {
      alert(error.message);
    },
  });

  const handleSaveUser = (model: UserInput) =>
    saveUser({ variables: { model } });

  return {
    saveUser: handleSaveUser,
    ...options,
  };
};
