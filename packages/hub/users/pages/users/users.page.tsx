import { Button, Icon, Page } from '@solness/ui';
import React, { FunctionComponent } from 'react';
import { Link } from '../../../core';
import { Users } from '../../components';

const UsersPage: FunctionComponent = () => {
  return (
    <Page
      title="Members"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quasi?"
      actions={
        <Link href="/members/invite">
          <Button
            aria-label="Invite user"
            leftIcon={<Icon icon="mail" />}
            colorScheme="purple"
            size="sm"
          >
            Invite member
          </Button>
        </Link>
      }
    >
      <Users />
    </Page>
  );
};

export default UsersPage;
