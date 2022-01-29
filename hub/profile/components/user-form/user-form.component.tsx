import { UserInput } from '@solness/generated-types';
import { Avatar, Button, Form, Stack, Tooltip } from '@solness/ui';

const UserForm = () => {
  const handleSubmit = async ({}: Partial<UserInput>) => {};

  return (
    <Form defaultValues={{}} onSubmit={handleSubmit}>
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
