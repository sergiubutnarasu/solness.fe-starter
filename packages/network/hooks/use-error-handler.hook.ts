import { useSecurityContext } from '@solness/security';
import { GraphQLError } from 'graphql';
import { useCallback } from 'react';

const UNAUTHORIZED_CODE = 401;
const NOT_FOUND_CODE = 404;

const checkStatusCode = (errors: readonly GraphQLError[], statusCode: number) =>
  errors.some(
    ({
      extensions: {
        exception: { status },
      },
    }) => status === statusCode,
  );

export const useErrorHandler = () => {
  const { logout } = useSecurityContext();

  const handleErrors = useCallback(async (errors: readonly GraphQLError[]) => {
    const hasUnauthorizedError = checkStatusCode(errors, UNAUTHORIZED_CODE);

    if (hasUnauthorizedError) {
      await logout();
    }
  }, []);

  return {
    handleErrors,
  };
};
