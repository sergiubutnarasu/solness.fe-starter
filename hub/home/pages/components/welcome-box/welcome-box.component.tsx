import React, { FunctionComponent } from 'react';
import { Box, Typography } from '@solness/ui';

const WelcomeBox: FunctionComponent = () => (
  <Box mb="8" p="8" borderRadius="md" boxShadow="sm" bg="purple.500">
    <Typography.Text fontSize="lg" color="white" fontWeight="semibold">
      Welcome back, Sergiu Butnarasu!
    </Typography.Text>
    <Typography.Text fontSize="sm" color="white">
      You have 6 unread{' '}
      <Typography.Text color="inherit" as="u">
        notifications
      </Typography.Text>{' '}
      and 3 new{' '}
      <Typography.Text color="inherit" as="u">
        documents
      </Typography.Text>
    </Typography.Text>
  </Box>
);

export default WelcomeBox;
