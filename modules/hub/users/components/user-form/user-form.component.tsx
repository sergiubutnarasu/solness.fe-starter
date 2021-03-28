import {
  Button,
  EmailValidator,
  Form,
  Grid,
  Input,
  Section,
} from "@solness/ui";
import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";
import { User, UserInput } from "~/graphql-generated/types";
import { useSaveUser } from "./data";

export interface Props {
  user?: User;
}

const UserForm: FunctionComponent<Props> = ({ user }) => {
  const { push } = useRouter();

  const { saveUser } = useSaveUser({
    onCompleted: () => {
      push("/users");
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
      role: "Admin",
    });
  };

  return (
    <Form defaultValues={user} onSubmit={handleSubmit}>
      <Section
        title="User information"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      >
        <Grid columns={2} align="start">
          <Grid.Item>
            <Input
              required
              name="firstName"
              label="First name"
              placeholder="First name"
            />
          </Grid.Item>

          <Grid.Item>
            <Input
              required
              name="lastName"
              label="Last name"
              placeholder="Last name"
            />
          </Grid.Item>
        </Grid>
      </Section>

      <Section
        title="Contact details"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      >
        <Grid columns={2} align="start">
          <Grid.Item>
            <Input
              required
              name="email"
              label="Email address"
              placeholder="Email address"
              validators={EmailValidator}
            />
          </Grid.Item>

          <Grid.Item></Grid.Item>
        </Grid>
      </Section>

      <div className="flex justify-end">
        <Button type="submit">Save user</Button>
      </div>
    </Form>
  );
};

export default UserForm;
