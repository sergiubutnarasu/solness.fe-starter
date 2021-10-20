import { Layout } from '@solness/ui';
import React, { FunctionComponent } from 'react';
import { LoginForm } from '../../components';

const LoginPage: FunctionComponent = () => {
  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
};

export default LoginPage;
