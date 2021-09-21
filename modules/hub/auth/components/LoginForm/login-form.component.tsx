import React, { FunctionComponent } from 'react';
import { Box, Form, Typography } from '~/common/components';
import { EMAIL_VALIDATION_PATTERN } from '~/common/configs';
import { Link } from '~/hub/core';
import { useSecurityContext } from '~/modules/security';

const LoginForm: FunctionComponent = () => {
  const { login } = useSecurityContext();

  const onSubmit = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => await login(username, password);

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

          <Form.SubmitButton w="full" rounded="full" size="lg">
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
