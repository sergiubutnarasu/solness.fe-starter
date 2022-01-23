import { EMAIL_VALIDATION_PATTERN } from '@solness/common';
import { User, UserInput } from '@solness/generated-types';
import { Box, Form, Icon, Section, Stack } from '@solness/ui';
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
        title="Basic information"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. dd dd dd"
      >
        <Form.Input isRequired name="firstName" label="First name" />
        <Form.Input isRequired name="lastName" label="Last name" />
      </Section>

      <Section
        title="Contact details"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      >
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
          leftElement={<Icon icon="mail" color="gray.500" />}
        />
      </Section>

      <Stack direction="row" justifyContent="flex-end">
        <Form.CancelButton onClick={handleCancel}>Cancel</Form.CancelButton>
        <Form.SubmitButton>Save user</Form.SubmitButton>
      </Stack>
    </Form>
  );
};

export default InviteUserForm;
