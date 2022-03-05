import { GetServerSidePropsContext } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';

const DynamicPage = dynamic(() => import('@solness/hub-auth/pages/recovery'), {
  loading: () => <p>loading tada</p>,
});

interface Props {
  date?: string;
}

const Page = ({ date }: Props) => <>{date}</>; // <DynamicPage token={token} />;

export const getServerSideProps = ({ params }: GetServerSidePropsContext) => {
  const date = params?.date as string;
  return { props: { date } };
};

export default Page;
