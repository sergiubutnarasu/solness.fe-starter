import { EmailValidator, Form, Grid, Input } from "@solness/ui";
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
      <Grid bottom={6}>
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

        <Input
          required
          name="email"
          label="Email address"
          placeholder="Email address"
          validators={EmailValidator}
        />
      </Grid>

      <button
        type="submit"
        className="cursor-pointer rounded-full select-none outline-none focus:outline-none shadow-md bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium px-3 py-3 w-full mb-8"
      >
        Save user
      </button>
    </Form>
  );
};

export default UserForm;
