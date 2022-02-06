import { Layout } from '@solness/ui';
import { useMemo } from 'react';
import {
  CheckResetPasswordToken,
  SendResetPasswordForm,
} from '../../components';

type Props = {
  token?: string;
};

const RecoveryPage = ({ token }: Props) => {
  const content = useMemo(() => {
    if (token) {
      return <CheckResetPasswordToken token={token} />;
    }

    return <SendResetPasswordForm />;
  }, [token]);

  return <Layout>{content}</Layout>;
};

export default RecoveryPage;
