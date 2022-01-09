import { GetServerSidePropsContext } from 'next';
import dynamic from 'next/dynamic';
import React, { FunctionComponent } from 'react';

const DynamicPage = dynamic(() => import('@solness/hub/users/pages/user'), {
  loading: () => <p>loading tada</p>,
});

export interface Props {
  id: number;
}

const Page: FunctionComponent<Props> = ({ id }) => <DynamicPage userId={id} />;

export const getServerSideProps = ({ params }: GetServerSidePropsContext) => {
  const userId = params?.id as string;
  return { props: { id: +userId } };
};

export default Page;
