import React, { FunctionComponent } from 'react';
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

  return <></>;
};

export default UserDetails;
