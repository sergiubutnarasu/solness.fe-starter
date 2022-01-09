import { gql, useQuery } from '@apollo/client';
import { GetUserQuery, GetUserQueryVariables } from '@solness/generated-types';
import { USER_FRAGMENT } from '../../../data';

const GET_USER = gql`
  query GetUser($userId: Float!) {
    user(id: $userId) {
      ...User
    }
  }

  ${USER_FRAGMENT}
`;

export const useGetUser = (userId: number) => {
  const { data, ...restOptions } = useQuery<
    GetUserQuery,
    GetUserQueryVariables
  >(GET_USER, {
    variables: { userId },
    // errorPolicy: 'all',
    onError: (error) => {
      // TODO - create something generic

      console.log(
        'get user',
        error.graphQLErrors.map(
          ({
            extensions: {
              exception: { status },
            },
          }) => status,
        ),
      );
    },
  });

  return { user: data?.user, ...restOptions };
};
