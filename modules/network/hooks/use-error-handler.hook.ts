import { useCallback, useEffect, useState } from "react";
import { useSecurityContext } from "~/modules/security";

const UNAUTHORIZED_ERROR = "Unauthorized";

export const useErrorHandler = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const { logout } = useSecurityContext();

  useEffect(() => {
    const checkErrors = async () => {
      const hasUnauthorizedError = errors?.some(
        (message: string) => message === UNAUTHORIZED_ERROR
      );

      if (hasUnauthorizedError) {
        await logout();
      }
    };

    checkErrors();
  }, [errors, logout]);

  const handleErrors = useCallback(
    (messages: string[]) => {
      setErrors(messages);
    },
    [setErrors]
  );

  return {
    handleErrors,
  };
};
