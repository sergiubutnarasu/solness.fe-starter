import { Grid, Icon, ListItem, Typography } from "@solness/ui";
import React, { FunctionComponent } from "react";
import { Link } from "~/hub/core";
import { useGetUsers } from "../../data";
import { useDeleteUser } from "../delete-user-modal";

export interface Props {}

const Users: FunctionComponent<Props> = () => {
  const { users } = useGetUsers();

  const {
    showModal: showDeleteUserModal,
    renderModal: renderDeleteUserModal,
  } = useDeleteUser();

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
                  <div className="cursor-pointer mr-2">
                    <Link href={userProfilePath}>
                      <Icon icon="edit" size="small" color="gray" />
                    </Link>
                  </div>

                  <div
                    className="cursor-pointer"
                    onClick={() => showDeleteUserModal(id)}
                  >
                    <Icon icon="delete" size="small" color="gray" />
                  </div>
                </div>
              </Grid.Item>
            </Grid>
          </ListItem>
        );
      })}

      {renderDeleteUserModal()}
    </>
  );
};

export default Users;
