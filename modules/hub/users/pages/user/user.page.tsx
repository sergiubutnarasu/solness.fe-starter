import React, { FunctionComponent, useMemo } from 'react';
import { Page } from '~/common/components';
import { UserDetails, UserForm } from '../../components';
import DeleteUserZone from '../../components/delete-user-zone';

export interface Props {
  userId?: number;
}

const UserPage: FunctionComponent<Props> = ({ userId }) => {
  const content = useMemo(() => {
    if (userId) {
      return <UserDetails userId={userId} />;
    }

    return <UserForm />;
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

      {userId && <DeleteUserZone userId={userId} />}
    </>
  );
};

export default UserPage;
