import { useCallback, useState } from 'react';
import { isRefreshTokenResponseValid } from '../helpers';
import { AuthHandler, SecurityContextProps, SessionType } from '../types';
import useSession from './use-session.hook';

const useSecurity = (): SecurityContextProps => {
  const [authHandler, setAuthHandler] = useState<AuthHandler | undefined>(
    undefined,
  );
  const { getSession, setSession, removeSession } = useSession();

  const login = useCallback(
    async (username: string, password: string) => {
      const result = await authHandler?.login(username, password);

      const isWithSuccess = result?.data?.login?.success;
      const hasData = result?.data?.login?.data;
      const isValid = Boolean(isWithSuccess && hasData);

      if (isValid) {
        await setSession(result.data.login.data as SessionType);

        return true;
      }

      return false;
    },

    [authHandler, setSession],
  );

  const logout = useCallback(async () => {
    const session = await getSession();

    if (session) {
      const refreshToken = session.refreshToken;
      await removeSession();
      await authHandler?.logout(refreshToken);
    }

    window.location.href = '/login';
  }, [authHandler, getSession, removeSession]);

  const refreshToken = useCallback(async () => {
    const session = await getSession();

    let result = undefined;

    if (session) {
      result = await authHandler?.refreshToken(
        session.refreshToken,
        session.accessToken,
      );

      const isValid = isRefreshTokenResponseValid(result);

      if (isValid) {
        await setSession(result.data.refresh.data as SessionType);
      }
    }

    return result?.data?.refresh?.data as SessionType;
  }, [authHandler, getSession, setSession]);

  return {
    login,
    logout,
    refreshToken,
    getSession,
    setAuthHandler,
  };
};

export default useSecurity;
