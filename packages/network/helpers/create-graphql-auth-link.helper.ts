import { setContext } from '@apollo/client/link/context';
import { SessionType } from '@solness/security';

interface CreateGraphQLAuthLinkProps {
  checkToken: () => Promise<void>;
  getSession: () => Promise<SessionType | undefined>;
}

export const createGraphQLAuthLink = ({
  checkToken,
  getSession,
}: CreateGraphQLAuthLinkProps) =>
  setContext(async (_, { headers }) => {
    await checkToken();

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
