import { GetServerSidePropsContext } from "next";
import React, { FunctionComponent } from "react";
import { UserPage } from "~/hub/users/pages";

export interface Props {
  id: number;
}

const Page: FunctionComponent<Props> = ({ id }) => <UserPage userId={id} />;

export const getServerSideProps = ({ params }: GetServerSidePropsContext) => {
  const userId = params?.id as string;
  return { props: { id: +userId } };
};

export default Page;
