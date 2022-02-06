import { GetServerSidePropsContext } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';

const DynamicPage = dynamic(() => import('@solness/hub-auth/pages/recovery'), {
  loading: () => <p>loading tada</p>,
});

type Props = {
  token?: string;
};

const Page = ({ token }: Props) => <DynamicPage token={token} />;

export const getServerSideProps = ({ params }: GetServerSidePropsContext) => {
  const token = params?.token as string;
  return { props: { token } };
};

export default Page;
