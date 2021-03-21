import { Icon, Typography } from "@solness/ui";
import React, { FunctionComponent } from "react";
import { UserFragment } from "~/graphql-generated/types";
import { ListItem } from "~/hub/core";

export interface Props {
  users: UserFragment[];
}

const Users: FunctionComponent<Props> = ({ users = [] }) => (
  <>
    {users.map(({ id, email, firstName, lastName, role }, index) => (
      <ListItem key={id} index={index}>
        <div className="flex items-center">
          <div className="w-3/12">
            <Typography size="small">
              {firstName} {lastName}
            </Typography>
          </div>
          <div className="w-2/12">
            <Typography size="small" color="gray">
              {role}
            </Typography>
          </div>
          <div className="w-3/12">
            <Typography size="small" color="gray">
              {email}
            </Typography>
          </div>
          <div className="w-4/12 flex items-center justify-end">
            <Icon icon="dots" size="small" color="gray" />
          </div>
        </div>
      </ListItem>
    ))}
  </>
);

export default Users;
