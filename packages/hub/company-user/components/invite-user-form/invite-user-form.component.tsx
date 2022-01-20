import { EMAIL_VALIDATION_PATTERN } from '@solness/common';
import { User, UserInput } from '@solness/generated-types';
import { Form, Grid, Icon, Section, Stack } from '@solness/ui';
import { useRouter } from 'next/router';
import React, { FunctionComponent } from 'react';
import { useInviteUser } from './data';

export interface Props {
  user?: User;
}

const InviteUserForm: FunctionComponent<Props> = ({ user }) => {
  const { push } = useRouter();

  const { inviteUser } = useInviteUser({
    onCompleted: () => {
      push('/members');
    },
    onError: (error) => alert(error.message),
  });

  const handleSubmit = async ({
    firstName = '',
    lastName = '',
    email = '',
  }: Partial<UserInput>) => {
    await inviteUser({
      firstName,
      lastName,
      email,
    });
  };

  const handleCancel = () => push('/members');

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

export default InviteUserForm;