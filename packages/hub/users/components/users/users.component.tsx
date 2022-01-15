import { Button, Grid, ListLoader, Typography } from '@solness/ui';
import React, { FunctionComponent } from 'react';
import { Link } from '../../../core';
import { useGetUsers } from '../../data';

export interface Props {}

const Users: FunctionComponent<Props> = () => {
  const { users, loading } = useGetUsers();

  if (loading) {
    return <ListLoader />;
  }

  return (
    <>
      {users?.map(({ id, email, firstName, lastName, role }, index) => {
        const userProfilePath = `users/${id}`;
        const color = index % 2 ? undefined : 'gray.50';

        return (
          <Grid
            key={id}
            px={4}
            py={2}
            bgColor={color}
            alignItems="center"
            borderRadius={8}
          >
            <Grid.Item colSpan={4}>
              <Typography.Text>
                {firstName} {lastName}
              </Typography.Text>
            </Grid.Item>
            <Grid.Item colSpan={2}>
              <Typography.Text color="gray.500">{role}</Typography.Text>
            </Grid.Item>
            <Grid.Item colSpan={4}>
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
      })}
    </>
  );
};

export default Users;
