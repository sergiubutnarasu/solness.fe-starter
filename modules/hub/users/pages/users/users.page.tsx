import { Button, Panel } from "@solness/ui";
import React, { FunctionComponent } from "react";
import { Link } from "~/hub/core";
import { Users } from "../../components";

const UsersPage: FunctionComponent = () => {
  return (
    <Panel
      title="Users"
      actions={
        <Link as="button" href="/users/add">
          <Button icon="plus" size="small" />
        </Link>
      }
    >
      <Users />
    </Panel>
  );
};

export default UsersPage;
