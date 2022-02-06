import { EMAIL_VALIDATION_PATTERN } from '@solness/common';
import { Link } from '@solness/hub-core';
import {
  Alert,
  Box,
  Button,
  Form,
  Typography,
  useNotification,
} from '@solness/ui';
import { useState } from 'react';
import AuthLayout from '../auth-layout';
import { useSendResetPasswordEmail } from './data';

const SendResetPasswordForm = () => {
  const [success, setSuccess] = useState(false);
  const { showSuccess, showError } = useNotification();

  const { sendResetPasswordEmail } = useSendResetPasswordEmail({
    onCompleted: () => {
      showSuccess('Reset password email was sent.');
      setSuccess(true);
    },
    onError: (error) => showError(error.message),
  });

  const onSubmit = async ({ email = '' }: { email?: string }) => {
    await sendResetPasswordEmail(email);
  };

  if (success) {
    return (
      <AuthLayout title="Reset you password">
        <Alert status="success">
          <Alert.Description>
            <Typography.Text>
              The reset password email was sent.
            </Typography.Text>
            <Typography.Text>
              Please follow the instruction from the email
            </Typography.Text>
          </Alert.Description>
        </Alert>

        <Link href="/login">
          <Button w="full" rounded="full" size="lg" mt="8">
            Go back
          </Button>
        </Link>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout title="Reset your password">
      <Form defaultValues={{ email: '' }} onSubmit={onSubmit}>
        <Form.Input
          size={'lg'}
          isRequired
          name="email"
          label="Email address"
          validators={{
            pattern: {
              value: EMAIL_VALIDATION_PATTERN,
              message: 'Please enter a valid email address.',
            },
          }}
        />

        <Form.SubmitButton w="full" rounded="full" size="lg" mt="8">
          Send reset password email
        </Form.SubmitButton>
      </Form>

      <Box mt={8}>
        <Typography.Text>
          If you don't want to reset your password,{' '}
          <Link href="/login" color="blue.500">
            you can go back.
          </Link>
        </Typography.Text>
      </Box>
    </AuthLayout>
  );
};

export default SendResetPasswordForm;
