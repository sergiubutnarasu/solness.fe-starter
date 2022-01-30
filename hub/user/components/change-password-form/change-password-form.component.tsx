import { Form, Stack, Typography, useNotification } from '@solness/ui';
import { useChangePassword } from './data';

type Props = {
  onCancel: () => void;
  onSuccess: () => void;
};

const ChangePasswordForm = ({ onCancel, onSuccess }: Props) => {
  const { showSuccess, showError } = useNotification();
  const { changePassword } = useChangePassword({
    onCompleted: (data) => {
      if (data.changePassword.success) {
        showSuccess('User data was updated.');
        onSuccess();
        return;
      }

      showError('Unable to change password');
    },
    onError: (error) => showError(error.message),
  });

  const handleSubmit = async ({
    oldPassword = '',
    newPassword = '',
    confirmPassword = '',
  }: Partial<{
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
  }>) => {
    if (newPassword !== confirmPassword) {
      return;
    }

    await changePassword({ oldPassword, newPassword });
  };

  return (
    <Form
      defaultValues={{
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form.Input
        isRequired
        type="password"
        name="oldPassword"
        label="Old password"
      />

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
        <Form.CancelButton onClick={onCancel}>Cancel</Form.CancelButton>
        <Form.SubmitButton colorScheme="red">Change password</Form.SubmitButton>
      </Stack>
    </Form>
  );
};

export default ChangePasswordForm;
