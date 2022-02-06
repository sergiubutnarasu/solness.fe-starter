import { Box, Typography } from '@solness/ui';
import { PropsWithChildren, ReactNode } from 'react';

type Props = {
  title: string;
};

const AuthLayout = ({ title, children }: PropsWithChildren<Props>) => (
  <Box
    w="full"
    h="full"
    display="flex"
    alignItems="center"
    justifyContent="center"
    background="transparent"
  >
    <Box w="md" px={10} py={16} rounded="lg" shadow="sm">
      <Box textAlign="center" mb={8}>
        <Typography.Title color="gray.600" fontSize="2xl">
          {title}
        </Typography.Title>
      </Box>

      {children}
    </Box>
  </Box>
);

export default AuthLayout;
