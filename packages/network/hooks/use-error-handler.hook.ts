import { useSecurityContext } from '@solness/security';
import { useCallback } from 'react';

const UNAUTHORIZED_ERROR = 'Unauthorized';

export const useErrorHandler = () => {
  const { logout } = useSecurityContext();

  const handleErrors = useCallback(async (messages: string[]) => {
    const hasUnauthorizedError = messages?.some(
      (message: string) => message === UNAUTHORIZED_ERROR,
    );

    if (hasUnauthorizedError) {
      await logout();
    }
  }, []);

  return {
    handleErrors,
  };
};
