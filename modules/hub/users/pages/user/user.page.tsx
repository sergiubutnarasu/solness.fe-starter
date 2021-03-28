import { Panel } from "@solness/ui";
import React, { FunctionComponent, useMemo } from "react";
import { UserDetails, UserForm } from "../../components";

export interface Props {
  userId?: number;
}

const UserPage: FunctionComponent<Props> = ({ userId }) => {
  const content = useMemo(() => {
    if (userId) {
      return <UserDetails userId={userId} />;
    }

    return <UserForm />;
  }, [userId]);

  return (
    <Panel
      title="User details"
      type="page"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quasi?"
    >
      {content}
    </Panel>
  );
};

export default UserPage;
