import React, { FunctionComponent } from "react";
import { PageLayout } from "~/hub/core";
import { useGetUsers } from "../../data";

const HomePage: FunctionComponent = () => {
  const { users } = useGetUsers();

  return (
    <PageLayout>
      <div>test</div>

      {users?.map(({ id, email }) => (
        <div key={id}>{email}</div>
      ))}
    </PageLayout>
  );
};

export default HomePage;
