import React, { FunctionComponent } from 'react';
import { Button, Page } from '~/common/components';
import { Link } from '~/hub/core';
import { Users } from '../../components';

const UsersPage: FunctionComponent = () => {
  return (
    <Page
      title="Users"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quasi?"
      actions={
        <Link href="/users/add">
          <Button.Icon
            aria-label="Add new user"
            icon="plus"
            colorScheme="purple"
            size="sm"
          />
        </Link>
      }
    >
      <Users />
    </Page>
  );
};

export default UsersPage;
