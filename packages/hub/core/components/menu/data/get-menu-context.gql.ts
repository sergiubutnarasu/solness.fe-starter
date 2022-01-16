import { gql } from '@apollo/client';
import { GetMenuContextQuery } from '@solness/generated-types';
import { useQuery } from '@solness/network';

const GET_MENU_CONTEXT = gql`
  query GetMenuContext {
    viewer {
      permissions {
        user {
          view
        }
        company {
          view
        }
        cash {
          view
        }
        inventory {
          view
        }
      }
    }
  }
`;

export const useGetMenuContext = ({
  skip = false,
}: { skip?: boolean } = {}) => {
  const { data, ...options } = useQuery<GetMenuContextQuery>(GET_MENU_CONTEXT, {
    fetchPolicy: 'cache-first',
    skip,
  });

  return {
    data,
    ...options,
  };
};
