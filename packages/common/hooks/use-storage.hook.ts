import localForage from 'localforage';
import { useCallback } from 'react';

const useStorage = (key: string) => {
  const get = useCallback(async <T>(): Promise<T | undefined> => {
    const item = await localForage.getItem<string>(key);

    if (!item) {
      return;
    }

    return JSON.parse(item) as T;
  }, [key]);

  const set = useCallback(
    async <T>(value: T) =>
      await localForage.setItem(key, JSON.stringify(value)),
    [key],
  );

  const remove = useCallback(
    async () => await localForage.removeItem(key),
    [key],
  );

  const clear = useCallback(async () => {
    await localForage.clear();
  }, []);

  return {
    get,
    set,
    remove,
    clear,
  };
};

export default useStorage;
