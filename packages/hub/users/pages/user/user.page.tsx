import { Page } from '@solness/ui';
import React, { FunctionComponent, useMemo } from 'react';
import { UserDangerZone, UserDetails } from '../../components';

export interface Props {
  userId?: number;
}

const UserPage: FunctionComponent<Props> = ({ userId }) => {
  const content = useMemo(() => {
    if (userId) {
      return <UserDetails userId={userId} />;
    }

    throw Error('User ID is missing.');
  }, [userId]);

  return (
    <>
      <Page
        marginBottom={8}
        title="User details"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quasi?"
      >
        {content}
      </Page>

      {userId && <UserDangerZone userId={userId} />}
    </>
  );
};

export default UserPage;
