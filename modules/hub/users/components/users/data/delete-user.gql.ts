import { gql, useMutation } from "@apollo/client";
import {
  DeleteUserMutation,
  DeleteUserMutationVariables,
} from "~/graphql-generated/types";
import { GET_USERS } from "./get-users.gql";

const DELETE_USER = gql`
  mutation DeleteUser($userId: Float!) {
    deleteUser(id: $userId) {
      id
    }
  }
`;

export const useDeleteUser = () => {
  const [deleteUser, restOptions] = useMutation<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >(DELETE_USER, { refetchQueries: [{ query: GET_USERS }] });

  const handleDeleteUser = async (userId: number) => {
    await deleteUser({ variables: { userId } });
  };

  return {
    deleteUser: handleDeleteUser,
    ...restOptions,
  };
};
