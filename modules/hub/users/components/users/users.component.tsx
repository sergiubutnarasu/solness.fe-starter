import { Dropdown, Icon, MenuItem, Typography } from "@solness/ui";
import React, { FunctionComponent } from "react";
import { Link, ListColumn, ListItem } from "~/hub/core";
import { useDeleteUser, useGetUsers } from "./data";

export interface Props {}

const Users: FunctionComponent<Props> = () => {
  const { users } = useGetUsers();
  const { deleteUser } = useDeleteUser();

  const handleDeleteUser = async (userId: number) => deleteUser(userId);

  return (
    <>
      {users?.map(({ id, email, firstName, lastName, role }, index) => {
        const userProfilePath = `users/edit/${id}`;

        return (
          <ListItem key={id} index={index} columns={4}>
            <ListColumn>
              <Typography size="small">
                {firstName} {lastName}
              </Typography>
            </ListColumn>
            <ListColumn>
              <Typography size="small" color="gray">
                {role}
              </Typography>
            </ListColumn>
            <ListColumn>
              <Typography size="small" color="gray">
                {email}
              </Typography>
            </ListColumn>
            <ListColumn>
              <div className="flex items-center justify-end">
                <div className="cursor-pointer mr-2">
                  <Link href={userProfilePath}>
                    <Icon icon="cog" size="small" color="blue" />
                  </Link>
                </div>
                <Dropdown
                  menu={
                    <div>
                      <Link href={userProfilePath}>
                        <span>
                          <MenuItem size="small">View profile</MenuItem>
                        </span>
                      </Link>

                      <MenuItem
                        size="small"
                        onClick={() => handleDeleteUser(id)}
                      >
                        Delete user
                      </MenuItem>
                    </div>
                  }
                >
                  <div className="cursor-pointer">
                    <Icon icon="dots" size="small" color="gray" />
                  </div>
                </Dropdown>
              </div>
            </ListColumn>
          </ListItem>
        );
      })}
    </>
  );
};

export default Users;
