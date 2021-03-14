import { useCallback } from "react";
import { addSeconds, isAfter, useStorage } from "~/modules/common";
import { ACCESS_STORAGE_KEY } from "../config";
import { SessionType } from "../types";

const useSession = () => {
  const { get, set, remove } = useStorage(ACCESS_STORAGE_KEY);

  const getSession = useCallback(async () => {
    const token = await get<SessionType>();

    return token;
  }, [get]);

  const setSession = useCallback(
    async (session: SessionType) => {
      const date = addSeconds(session.expiresIn);
      session.expireDate = date;
      return await set(session);
    },
    [set]
  );

  const removeSession = useCallback(async () => await remove(), [remove]);

  const isSessionExpired = useCallback(async () => {
    const session = await get<SessionType>();

    if (!session?.expireDate) {
      return true;
    }

    return isAfter(session.expireDate);
  }, [get]);

  return {
    getSession,
    setSession,
    removeSession,
    isSessionExpired,
  };
};

export default useSession;
