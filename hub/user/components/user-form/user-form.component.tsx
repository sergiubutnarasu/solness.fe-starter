import { UserFragmentFragment, UserInput } from '@solness/generated-types';
import { useHubContext } from '@solness/hub-core';
import {
  Avatar,
  Button,
  Form,
  Stack,
  Tooltip,
  useNotification,
} from '@solness/ui';
import { useUpdateUser } from './data';

type Props = {
  user: UserFragmentFragment;
};

const UserForm = ({ user }: Props) => {
  const { showSuccess, showError } = useNotification();
  const { user: appUser, setUser } = useHubContext();

  const { updateUser } = useUpdateUser({
    onCompleted: () => {
      showSuccess('User data was updated.');
    },
    onError: (error) => showError(error.message),
  });

  const handleSubmit = async ({
    firstName = '',
    lastName = '',
    title = '',
    description = '',
  }: Partial<UserInput>) => {
    const { data } = await updateUser({
      firstName,
      lastName,
      title,
      description,
    });

    if (data?.updateUser.success) {
      setUser({ id: appUser?.id, firstName, lastName, title });
    }
  };

  return (
    <Form defaultValues={user} onSubmit={handleSubmit}>
      <Stack mb={4} direction="row" alignItems="center">
        <Avatar />
        <Tooltip
          label="This action will be available soon"
          placement="top"
          display="inline-block"
          mr={2}
        >
          <Button disabled>Change avatar</Button>
        </Tooltip>
      </Stack>

      <Form.Input
        isRequired
        name="firstName"
        label="First name"
        maxLength={50}
      />

      <Form.Input isRequired name="lastName" label="Last name" maxLength={50} />

      <Form.Input name="title" label="Title" maxLength={50} />

      <Form.Textarea
        name="description"
        label="About you"
        rows={5}
        maxLength={150}
      />

      <Stack direction="row" mt={8} justifyContent="flex-end">
        <Form.SubmitButton>Save details</Form.SubmitButton>
      </Stack>
    </Form>
  );
};

export default UserForm;
