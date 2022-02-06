import { EMAIL_VALIDATION_PATTERN } from '@solness/common';
import { useSecurityContext } from '@solness/security';
import { Box, Form, Typography } from '@solness/ui';
import { useRouter } from 'next/router';
import React, { FunctionComponent, useState } from 'react';
import { Link } from '../../../core';
import AuthLayout from '../auth-layout';

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
    <AuthLayout title="Access your account">
      <Form defaultValues={{ username: '', password: '' }} onSubmit={onSubmit}>
        <Form.Input
          size={'lg'}
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
          size="lg"
          type="password"
          name="password"
          label="Password"
        />

        <Form.SubmitButton
          isLoading={isLoading}
          w="full"
          rounded="full"
          size="lg"
          mt="8"
        >
          I'm ready!
        </Form.SubmitButton>
      </Form>

      <Box mt={8} textAlign="center">
        <Typography.Text>
          Forgot your password?{' '}
          <Link href="/recovery" color="blue.500">
            Recover your password!
          </Link>
        </Typography.Text>
      </Box>
    </AuthLayout>
  );
};

export default LoginForm;
