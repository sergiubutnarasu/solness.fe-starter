import { useCallback } from 'react';
import { addSeconds, isAfter } from '~/common/helpers';
import { useStorage } from '~/common/hooks';
import { ACCESS_STORAGE_KEY } from '../config';
import { SessionType } from '../types';

const useSession = () => {
  const { get, set, clear } = useStorage(ACCESS_STORAGE_KEY);

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
    [set],
  );

  const removeSession = useCallback(async () => await clear(), [clear]);

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
