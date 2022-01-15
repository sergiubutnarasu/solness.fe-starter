import { Button, Icon, Page } from '@solness/ui';
import React, { FunctionComponent } from 'react';
import { Link } from '../../../core';
import { Users } from '../../components';

const UsersPage: FunctionComponent = () => {
  return (
    <Page
      title="Users"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quasi?"
      actions={
        <Link href="/users/add">
          <Button
            aria-label="Invite user"
            leftIcon={<Icon icon="plus" />}
            colorScheme="purple"
            size="sm"
          >
            Invite user
          </Button>
        </Link>
      }
    >
      <Users />
    </Page>
  );
};

export default UsersPage;
