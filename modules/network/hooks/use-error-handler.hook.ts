import { useCallback, useEffect, useState } from "react";
import { useSecurityContext } from "~/modules/security";

const UNAUTHORIZED_ERROR = "Unauthorized";

export const useErrorHandler = () => {
  // const [errors, setErrors] = useState<string[]>([]);
  const { logout } = useSecurityContext();

  // useEffect(() => {
  //   const checkErrors = async () => {
  //     console.log("test", errors);
  //   };

  //   checkErrors();
  // }, [errors, logout]);

  const handleErrors = useCallback(
    async (messages: string[]) => {
      const hasUnauthorizedError = messages?.some(
        (message: string) => message === UNAUTHORIZED_ERROR
      );

      if (hasUnauthorizedError) {
        await logout();
      }
    },
    []
  );

  return {
    handleErrors,
  };
};
