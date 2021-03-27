import React, { FunctionComponent } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { User, UserInput } from "~/graphql-generated/types";
import { Input } from "~/hub/core";
import { EmailValidator } from "~/hub/core/validators";
import { useSaveUser } from "./data";

export interface Props {
  user?: User;
}

const UserForm: FunctionComponent<Props> = ({ user }) => {
  const methods = useForm<User>({
    defaultValues: user,
  });

  const { saveUser, error } = useSaveUser();

  const onSubmit = async ({
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
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Input
          required
          name="firstName"
          label="First name"
          placeholder="First name"
        />

        <Input
          required
          name="lastName"
          label="Last name"
          placeholder="Last name"
        />

        <Input
          required
          name="email"
          label="Email address"
          placeholder="Email address"
          validators={EmailValidator}
        />

        <button
          type="submit"
          className="cursor-pointer rounded-full select-none outline-none focus:outline-none shadow-md bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium px-3 py-3 w-full mb-8"
        >
          Save user
        </button>
      </form>
    </FormProvider>
  );
};

export default UserForm;
