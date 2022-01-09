import { useCallback, useState } from 'react';
import { AuthHandler, SecurityContextProps, SessionType } from '../types';
import useSession from './use-session.hook';

const useSecurity = (): SecurityContextProps => {
  const [authHandler, setAuthHandler] = useState<AuthHandler | undefined>(
    undefined,
  );
  const { getSession, setSession, removeSession, isSessionExpired } =
    useSession();

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
      await authHandler?.logout(session.refreshToken);
      await removeSession();
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

      const isWithSuccess = result?.data?.refresh?.success;
      const hasData = result?.data?.refresh?.data;
      const isValid = Boolean(isWithSuccess && hasData);

      if (isValid) {
        await setSession(result.data.refresh.data as SessionType);
      }
    }

    return result?.data?.refresh?.data as SessionType;
  }, [authHandler, getSession, setSession]);

  const checkToken = useCallback(async () => {
    if (await isSessionExpired()) {
      await refreshToken();
    }
  }, [isSessionExpired, refreshToken]);

  return {
    login,
    logout,
    refreshToken,
    getSession,
    checkToken,
    setAuthHandler,
  };
};

export default useSecurity;
