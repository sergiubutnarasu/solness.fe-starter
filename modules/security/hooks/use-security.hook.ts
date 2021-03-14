import { useCallback } from "react";
import { useFetch } from "~/modules/common";
import { SessionType } from "../types";
import useSession from "./use-session.hook";

const useSecurity = ({
  loginPath,
  logoutPath,
  refreshTokenPath,
}: {
  loginPath: string;
  logoutPath: string;
  refreshTokenPath: string;
}) => {
  const { post } = useFetch();
  const {
    getSession,
    setSession,
    removeSession,
    isSessionExpired,
  } = useSession();

  const login = useCallback(
    async (username: string, password: string) => {
      const result = await post(loginPath, {
        data: {
          username,
          password,
        },
      });

      if (result) {
        await setSession(result as SessionType);

        window.location.href = "/";
      }

      return result as SessionType;
    },

    [loginPath, post, setSession]
  );

  const logout = useCallback(async () => {
    const session = await getSession();

    if (session) {
      await post(logoutPath, {
        data: {
          refreshToken: session.refreshToken,
        },
      });

      await removeSession();

      window.location.reload();
    }
  }, [logoutPath, post, getSession, removeSession]);

  const refreshToken = useCallback(async () => {
    const session = await getSession();

    let result = undefined;

    if (session) {
      result = await post(refreshTokenPath, {
        data: {
          accessToken: session.accessToken,
          refreshToken: session.refreshToken,
        },
      });
    }

    if (result) {
      await setSession(result as SessionType);
    }

    return result as SessionType;
  }, [refreshTokenPath, post, getSession, setSession]);

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
  };
};

export default useSecurity;
