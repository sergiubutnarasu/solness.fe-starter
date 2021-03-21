import { Button, Panel } from "@solness/ui";
import React, { FunctionComponent } from "react";
import { Link } from "~/hub/core";
import { Users } from "../../components";
import { useGetUsers } from "./data";

const UsersPage: FunctionComponent = () => {
  const { users } = useGetUsers();

  return (
    <Panel
      title="Users"
      actions={
        <Link as="button" href="/users/add">
          <Button icon="plus" size="small" />
        </Link>
      }
    >
      <Users users={users} />
    </Panel>
  );
};

export default UsersPage;
