import { EMAIL_VALIDATION_PATTERN } from '@solness/common';
import { useSecurityContext } from '@solness/security';
import { Box, Form, Typography } from '@solness/ui';
import { useRouter } from 'next/router';
import React, { FunctionComponent, useState } from 'react';
import { Link } from '../../../core';

const LoginForm: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useSecurityContext();
  const { push } = useRouter();

  const onSubmit = async ({
    username = '',
    password = '',
  }: {
    username?: string;
    password?: string;
  }) => {
    const success = await login(username, password);

    if (success) {
      setIsLoading(true);
      push('/');
    }
  };

  return (
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
            Access your account
          </Typography.Title>
        </Box>

        <Form
          defaultValues={{ username: '', password: '' }}
          onSubmit={onSubmit}
        >
          <Form.Input
            mb={4}
            isRequired
            name="username"
            label="Email address"
            validators={{
              pattern: {
                value: EMAIL_VALIDATION_PATTERN,
                message: 'Please enter a valid email address.',
              },
            }}
          />

          <Form.Input
            isRequired
            mb={8}
            type="password"
            name="password"
            label="Password"
          />

          <Form.SubmitButton
            isLoading={isLoading}
            w="full"
            rounded="full"
            size="lg"
          >
            Log into Hub
          </Form.SubmitButton>
        </Form>

        <Box mt={8} textAlign="center">
          <Typography.Text>
            Forgot your password?{' '}
            <Link href="/users" color="blue.500">
              Recover your password!
            </Link>
          </Typography.Text>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
