import { Page } from '@solness/ui';
import React, { FunctionComponent } from 'react';
import { UserDetails } from '../../components';

export interface Props {
  companyUserId: number;
}

const UserPage: FunctionComponent<Props> = ({ companyUserId }) => (
  <>
    <Page
      marginBottom={8}
      title="User details"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quasi?"
    >
      <UserDetails companyUserId={companyUserId} />
    </Page>
  </>
);

export default UserPage;
