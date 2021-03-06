import { Button, Grid, Icon, Tooltip, Typography } from '@solness/ui';
import { CompanyUserFragmentFragment } from 'generated/types';
import React, { FunctionComponent } from 'react';
import { Link } from '../../../core';
import CompanyUserIcon from '../company-user-icon';

export interface Props {
  companyUsers: CompanyUserFragmentFragment[];
}

const CompanyUsers: FunctionComponent<Props> = ({ companyUsers }) => {
  return (
    <>
      {companyUsers?.map(
        (
          {
            id: companyUserId,
            verified,
            roles,
            user: { email, firstName, lastName },
          },
          index,
        ) => {
          const userProfilePath = `members/${companyUserId}`;
          const color = index % 2 ? undefined : 'gray.50';

          return (
            <Grid
              key={companyUserId}
              px={4}
              py={2}
              bgColor={color}
              alignItems="center"
              borderRadius={8}
              columns={25}
            >
              <Grid.Item textAlign="center">
                <CompanyUserIcon verified={verified} roles={roles} />
              </Grid.Item>
              <Grid.Item colSpan={8}>
                <Typography.Text>
                  {firstName} {lastName}
                </Typography.Text>
              </Grid.Item>
              <Grid.Item colSpan={14}>
                <Typography.Text color="gray.500">{email}</Typography.Text>
              </Grid.Item>
              <Grid.Item colSpan={2} textAlign="right">
                <Link href={userProfilePath}>
                  <Button.Icon
                    variant="ghost"
                    aria-label="View details"
                    icon="dots"
                    size="sm"
                    color="gray"
                  />
                </Link>
              </Grid.Item>
            </Grid>
          );
        },
      )}
    </>
  );
};

export default CompanyUsers;
