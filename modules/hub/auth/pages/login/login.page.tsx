import React, { FunctionComponent } from 'react';
import { Layout } from '~/common/components';
import { LoginForm } from '../../components';

const LoginPage: FunctionComponent = () => {
  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
};

export default LoginPage;
