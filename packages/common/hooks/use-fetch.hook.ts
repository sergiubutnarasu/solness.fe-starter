import { useCallback } from 'react';
import { FetchOptions } from '../types';

const checkStatus = (response: Response) => {
  const status: number = response.status;
  if (status >= 200 && status < 300) {
    return response;
  } else if (status === 401) {
    window.location.href = '/login';
  } else if (status === 403) {
    window.location.href = '/';
  } else {
    var error = new Error(response.statusText);
    throw error;
  }
};

const parseJSON = async (response?: Response) => {
  let result: unknown;

  try {
    result = await response?.json();
  } catch {
    result = undefined;
  }

  return result;
};

const useFetch = () => {
  const post = useCallback(
    async (
      url: string,
      {
        data,
        contentType = 'application/json',
        authorization,
        onComplete,
        onError,
      }: FetchOptions = {},
    ) =>
      await fetch(url, {
        method: 'POST',
        credentials: 'include',
        // @ts-expect-error - TODO
        headers: {
          'Content-Type': contentType,
          Authorization: authorization,
        },
        body: JSON.stringify(data),
      })
        .then(checkStatus)
        .then(parseJSON)
        .catch((ex) => {
          console.log('post failed', ex);
          onError?.(ex);
        })
        .finally(onComplete),
    [],
  );

  return { post };
};

export default useFetch;
