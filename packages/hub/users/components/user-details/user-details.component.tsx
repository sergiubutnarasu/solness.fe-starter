import { Box, Grid, Skeleton, Stack } from '@solness/ui';
import React, { FunctionComponent } from 'react';
import UserForm from '../user-form';
import { useGetUser } from './data';
import { UserDetailsLoader } from './user-details-loader.component';

export interface Props {
  userId: number;
}

const UserDetails: FunctionComponent<Props> = ({ userId }) => {
  const { user, loading } = useGetUser(userId);

  if (loading) {
    return <UserDetailsLoader />;
  }

  if (!user) {
    return null;
  }

  return (
    <>
      <UserForm user={user} />
    </>
  );
};

export default UserDetails;
