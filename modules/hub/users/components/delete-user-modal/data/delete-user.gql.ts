import { ApolloError, gql, useMutation } from "@apollo/client";
import {
  DeleteUserMutation,
  DeleteUserMutationVariables,
} from "~/graphql-generated/types";
import { GET_USERS } from "../../../data";

const DELETE_USER = gql`
  mutation DeleteUser($userId: Float!) {
    deleteUser(id: $userId) {
      data {
        id
      }
    }
  }
`;

export const useDeleteUser = ({
  onCompleted,
  onError,
}: {
  onCompleted?: () => void;
  onError?: (error: ApolloError) => void;
} = {}) => {
  const [deleteUser, restOptions] = useMutation<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >(DELETE_USER, {
    onCompleted,
    onError,
    refetchQueries: [{ query: GET_USERS }],
  });

  const handleDeleteUser = async (userId: number) => {
    await deleteUser({ variables: { userId } });
  };

  return {
    deleteUser: handleDeleteUser,
    ...restOptions,
  };
};
