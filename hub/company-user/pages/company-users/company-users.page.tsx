import { Button, Icon, ListLoader, Page } from '@solness/ui';
import React, { FunctionComponent } from 'react';
import { Link } from '../../../core';
import { CompanyUsers } from '../../components';
import { useGetCompanyUsers } from '../../data';

const CompanyUsersPage: FunctionComponent = () => {
  const { companyUsers, allowInviteUser, loading } = useGetCompanyUsers();

  if (loading) {
    return (
      <Page
        title="Members"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quasi?"
      >
        <ListLoader />
      </Page>
    );
  }

  return (
    <Page
      title="Members"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quasi?"
      actions={
        allowInviteUser && (
          <Link href="/members/invite">
            <Button
              aria-label="Invite user"
              leftIcon={<Icon icon="mail-solid" />}
              colorScheme="purple"
              size="sm"
            >
              Invite member
            </Button>
          </Link>
        )
      }
    >
      <CompanyUsers companyUsers={companyUsers} />
    </Page>
  );
};

export default CompanyUsersPage;
