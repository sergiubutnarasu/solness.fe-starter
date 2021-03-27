import React, { FunctionComponent } from "react";
import UserForm from "../user-form";
import { useGetUser } from "./data";

export interface Props {
  userId: number;
}

const UserDetails: FunctionComponent<Props> = ({ userId }) => {
  const { user } = useGetUser(userId);

  if (!user) {
    return null;
  }

  return <UserForm user={user} />;
};

export default UserDetails;