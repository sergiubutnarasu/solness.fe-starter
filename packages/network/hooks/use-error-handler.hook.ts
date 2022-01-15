import { useSecurityContext } from '@solness/security';
import { GraphQLError } from 'graphql';
import { useCallback } from 'react';
import { NetworkStatusCode } from '../config';
import { checkStatusCode } from '../helpers';

export const useErrorHandler = () => {
  const { logout } = useSecurityContext();

  const handleErrors = useCallback(async (errors: readonly GraphQLError[]) => {
    const hasUnauthorizedError = checkStatusCode(
      errors,
      NetworkStatusCode.UNAUTHORIZED,
    );

    if (hasUnauthorizedError) {
      await logout();
    }
  }, []);

  return {
    handleErrors,
  };
};
