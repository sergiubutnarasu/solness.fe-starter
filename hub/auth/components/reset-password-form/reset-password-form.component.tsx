import { Link } from '@solness/hub-core';
import { Button, Form, Stack, Typography, useNotification } from '@solness/ui';
import { useRouter } from 'next/router';
import { useResetPassword } from './data';

interface Props {
  token: string;
}

const ResetPasswordForm = ({ token }: Props) => {
  const { push } = useRouter();
  const { showSuccess, showError } = useNotification();
  const { resetPassword } = useResetPassword({
    onCompleted: (data) => {
      if (data.resetPassword.success) {
        showSuccess('Your password was changed.');
        push('/login');
        return;
      }

      showError('Unable to reset password');
    },
    onError: (error) => showError('Unable to reset password: ' + error.message),
  });

  const handleSubmit = async ({
    newPassword = '',
    confirmPassword = '',
  }: Partial<{
    newPassword: string;
    confirmPassword: string;
  }>) => {
    if (newPassword !== confirmPassword) {
      return;
    }

    await resetPassword(token, newPassword);
  };

  return (
    <Form
      defaultValues={{
        newPassword: '',
        confirmPassword: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form.Input
        isRequired
        type="password"
        name="newPassword"
        label="New password"
        minLength={6}
      />

      <Form.Input
        isRequired
        type="password"
        name="confirmPassword"
        label="Confirm password"
        minLength={6}
        hint="Enter the new password again."
      />

      <Form.WatchOn name={['newPassword', 'confirmPassword']}>
        {(data, { formState: { isSubmitted } }) => {
          const [newPassword, confirmPassword] = data ?? [];

          if (
            isSubmitted &&
            confirmPassword &&
            newPassword !== confirmPassword
          ) {
            return (
              <Typography.Text color="red.500">
                The confirm password doesn't match the new password.
              </Typography.Text>
            );
          }
        }}
      </Form.WatchOn>

      <Stack direction="row" mt={8} justifyContent="flex-end">
        <Link href="/login">
          <Button>Go back</Button>
        </Link>
        <Form.SubmitButton colorScheme="red">Change password</Form.SubmitButton>
      </Stack>
    </Form>
  );
};

export default ResetPasswordForm;
