import { setContext } from '@apollo/client/link/context';
import { SessionType } from '@solness/security';

interface CreateGraphQLAuthLinkProps {
  getSession: () => Promise<SessionType | undefined>;
}

export const createGraphQLAuthLink = ({
  getSession,
}: CreateGraphQLAuthLinkProps) =>
  setContext(async (_, { headers }) => {
    const session = await getSession();
    const token = session?.accessToken;

    const authorization = token ? `Bearer ${token}` : '';

    return {
      headers: {
        ...headers,
        Authorization: authorization,
      },
    };
  });
