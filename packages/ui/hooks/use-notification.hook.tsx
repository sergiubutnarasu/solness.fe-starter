import { useToast, UseToastOptions } from '@chakra-ui/react';
import { useCallback } from 'react';
import { Typography } from '../components';

export const useNotification = (props?: UseToastOptions) => {
  const toast = useToast({ position: 'top', isClosable: true, ...props });

  const showSuccess = useCallback(
    (description: string) => {
      toast({
        description: (
          <Typography.Text color="gray.700">{description}</Typography.Text>
        ),
        status: 'success',
      });
    },
    [toast],
  );

  const showError = useCallback(
    (description: string) => {
      toast({
        description: (
          <Typography.Text color="gray.700">{description}</Typography.Text>
        ),
        status: 'error',
      });
    },
    [toast],
  );

  return { showSuccess, showError };
};
