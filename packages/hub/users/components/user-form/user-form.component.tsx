import { EMAIL_VALIDATION_PATTERN } from '@solness/common';
import { User, UserInput } from '@solness/generated-types';
import { Form, Grid, Icon, Section, Stack } from '@solness/ui';
import { useRouter } from 'next/router';
import React, { FunctionComponent } from 'react';
import { useCreateUser, useUpdateUser } from './data';

export interface Props {
  user?: User;
}

const UserForm: FunctionComponent<Props> = ({ user }) => {
  const { push } = useRouter();

  const { createUser } = useCreateUser({
    onCompleted: () => {
      push('/users');
    },
    onError: (error) => alert(error.message),
  });

  const { updateUser } = useUpdateUser({
    onCompleted: () => {
      push('/users');
    },
    onError: (error) => alert(error.message),
  });

  const handleSubmit = async ({
    firstName = '',
    lastName = '',
    email = '',
  }: Partial<UserInput>) => {
    if (user?.id) {
      await updateUser({
        id: user?.id,
        firstName,
        lastName,
        email,
        enabled: true,
      });
    } else {
      await createUser({
        firstName,
        lastName,
        email,
        enabled: true,
      });
    }
  };

  const handleCancel = () => push('/users');

  return (
    <Form defaultValues={user} onSubmit={handleSubmit}>
      <Section
        title="User information"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      >
        <Grid spacing={8}>
          <Grid.Item colSpan={6}>
            <Form.Input isRequired name="firstName" label="First name" />
          </Grid.Item>

          <Grid.Item colSpan={6}>
            <Form.Input isRequired name="lastName" label="Last name" />
          </Grid.Item>
        </Grid>
      </Section>

      <Section
        title="Contact details"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      >
        <Grid spacing={8}>
          <Grid.Item colSpan={6}>
            <Form.Input
              isRequired
              name="email"
              label="Email address"
              validators={{
                pattern: {
                  value: EMAIL_VALIDATION_PATTERN,
                  message: 'Please enter a valid email address.',
                },
              }}
              leftElement={<Icon icon="view" color="gray.500" />}
            />
          </Grid.Item>
        </Grid>
      </Section>

      <Stack direction="row" justifyContent="flex-end">
        <Form.CancelButton onClick={handleCancel}>Cancel</Form.CancelButton>
        <Form.SubmitButton>Save user</Form.SubmitButton>
      </Stack>
    </Form>
  );
};

export default UserForm;
