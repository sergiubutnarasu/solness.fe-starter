import { Button, Panel } from "@solness/ui";
import React, { FunctionComponent } from "react";
import { Link } from "~/hub/core";
import { Users } from "../../components";

const UsersPage: FunctionComponent = () => {
  return (
    <Panel
      type="page"
      title="Users"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quasi?"
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
