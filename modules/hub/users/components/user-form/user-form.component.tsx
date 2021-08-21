import { MailOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import React, { FunctionComponent } from 'react';
import { Form, Grid, Input, Section, Stack } from '~/common/components';
import { useFormContext } from '~/common/providers';
import { User, UserInput } from '~/graphql-generated/types';
import { useSaveUser } from './data';

export interface Props {
  user?: User;
}

const UserForm: FunctionComponent<Props> = ({ user }) => {
  const { push } = useRouter();
  const { setSubmitting } = useFormContext();

  const { saveUser } = useSaveUser({
    onCompleted: () => {
      push('/users');
    },
    onError: (error) => alert(error.message),
  });

  const handleSubmit = async ({
    firstName,
    lastName,
    email,
  }: Partial<UserInput>) => {
    await saveUser({
      id: user?.id,
      firstName,
      lastName,
      email,
      enabled: true,
      role: 'Admin',
    });

    setSubmitting(false);
  };

  const handleCancel = () => push('/users');

  return (
    <Form initialValues={user} onFinish={handleSubmit}>
      <Section
        title="User information"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      >
        <Grid>
          <Grid.Item colSpan={6}>
            <Form.Item
              name="firstName"
              label="First name"
              rules={[
                { required: true, message: 'Please input your first name!' },
              ]}
            >
              <Input />
            </Form.Item>
          </Grid.Item>

          <Grid.Item colSpan={6}>
            <Form.Item
              name="lastName"
              label="Last name"
              rules={[
                { required: true, message: 'Please input your last name!' },
              ]}
            >
              <Input />
            </Form.Item>
          </Grid.Item>
        </Grid>
      </Section>

      <Section
        title="Contact details"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      >
        <Grid>
          <Grid.Item colSpan={6}>
            <Form.Item
              name="email"
              label="Email address"
              rules={[
                { required: true, message: 'Please input your email address!' },
                {
                  type: 'email',
                  message: 'Please enter a valid email address!',
                },
              ]}
            >
              <Input prefix={<MailOutlined />} />
            </Form.Item>
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
