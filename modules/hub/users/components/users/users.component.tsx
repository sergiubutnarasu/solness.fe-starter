import { Grid, Icon, ListItem, Typography } from "@solness/ui";
import React, { FunctionComponent } from "react";
import { Link } from "~/hub/core";
import { useGetUsers } from "../../data";

export interface Props {}

const Users: FunctionComponent<Props> = () => {
  const { users, loading } = useGetUsers();

  if (loading) {
    return <>Loading</>;
  }

  return (
    <>
      {users?.map(({ id, email, firstName, lastName, role }, index) => {
        const userProfilePath = `users/edit/${id}`;

        return (
          <ListItem key={id} index={index}>
            <Grid columns={4}>
              <Grid.Item>
                <Typography size="small">
                  {firstName} {lastName}
                </Typography>
              </Grid.Item>
              <Grid.Item>
                <Typography size="small" color="gray">
                  {role}
                </Typography>
              </Grid.Item>
              <Grid.Item>
                <Typography size="small" color="gray">
                  {email}
                </Typography>
              </Grid.Item>
              <Grid.Item>
                <div className="flex items-center justify-end">
                  <div className="cursor-pointer">
                    <Link href={userProfilePath}>
                      <Icon icon="edit" size="small" color="gray" />
                    </Link>
                  </div>
                </div>
              </Grid.Item>
            </Grid>
          </ListItem>
        );
      })}
    </>
  );
};

export default Users;
