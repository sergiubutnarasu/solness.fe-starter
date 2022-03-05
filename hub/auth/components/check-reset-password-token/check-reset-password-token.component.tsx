import { Link } from '@solness/hub-core';
import { Alert, Button, Typography, useNotification } from '@solness/ui';
import { useEffect, useMemo } from 'react';
import AuthLayout from '../auth-layout';
import ResetPasswordForm from '../reset-password-form';
import { useCheckResetPasswordToken } from './data';

interface Props {
  token: string;
}

const CheckResetPasswordToken = ({ token }: Props) => {
  const { showError } = useNotification();
  const { checkResetPasswordToken, data, loading } = useCheckResetPasswordToken(
    {
      onError: (error) => showError(error.message),
    },
  );

  useEffect(() => {
    checkResetPasswordToken(token);
  }, [token]);

  const content = useMemo(() => {
    if (!data?.checkResetPasswordToken.success) {
      return (
        <>
          <Alert status="error">
            <Alert.Description>
              <Typography.Text>
                This link is not available anymore.
              </Typography.Text>
            </Alert.Description>
          </Alert>

          <Link href="/login">
            <Button w="full" rounded="full" size="lg" mt="8">
              Go back
            </Button>
          </Link>
        </>
      );
    }

    return <ResetPasswordForm token={token} />;
  }, [data]);

  if (loading) {
    return <>loading reset</>;
  }

  if (!data) {
    return null;
  }

  return <AuthLayout title="Reset your password">{content}</AuthLayout>;
};

export default CheckResetPasswordToken;
