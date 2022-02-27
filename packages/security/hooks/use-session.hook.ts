import { useStorage } from '@solness/common';
import { useCallback } from 'react';
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
      return await set(session);
    },
    [set],
  );

  const removeSession = useCallback(async () => await clear(), [clear]);

  return {
    getSession,
    setSession,
    removeSession,
  };
};

export default useSession;
