import { Button, Panel } from "@solness/ui";
import React, { FunctionComponent } from "react";
import { Users } from "../../components";
import { useGetUsers } from "./data";

const UsersPage: FunctionComponent = () => {
  const { users } = useGetUsers();

  return (
    <Panel title="Users" actions={<Button icon="plus" size="small" />}>
      <Users users={users} />
    </Panel>
  );
};

export default UsersPage;
