import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { Typography } from '~/common/components';
import { Link } from '~/hub/core';
import { useSecurityContext } from '~/modules/security';

const LoginForm: FunctionComponent = () => {
  const { register, handleSubmit } = useForm();
  const { login } = useSecurityContext();

  const onSubmit = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => await login(username, password);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-1/4 bg-white px-10 py-16 rounded-lg shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-gray-700 text-2xl font-semibold text-center mb-10">
            Access your account
          </h1>

          <div className="mb-6">
            <label className="block text-gray-600 text-md font-light mb-2">
              Email address
            </label>
            <input
              className="px-3 py-4 w-full text-gray-700 text-sm leading-none appearance-none border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-100"
              type="text"
              name="username"
              placeholder="Email address"
              // ref={register({ required: true })}
            />
          </div>

          <div className="mb-8">
            <label className="block text-gray-600 text-md font-light mb-2">
              Password
            </label>
            <input
              className="px-3 py-4 w-full text-gray-700 text-sm leading-none appearance-none border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-100"
              type="password"
              name="password"
              placeholder="Password"
              // ref={register({ required: true })}
            />
          </div>

          <button
            type="submit"
            className="cursor-pointer rounded-full select-none outline-none focus:outline-none shadow-md bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium px-3 py-3 w-full mb-8"
          >
            Log into Hub
          </button>

          <hr className="mb-8" />

          <div className="text-center">
            <Typography.Text>
              Forgot your password?{' '}
              <Link href="/users">Recover your password!</Link>
            </Typography.Text>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
