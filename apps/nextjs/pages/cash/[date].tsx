import { GetServerSidePropsContext } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';

const DynamicPage = dynamic(
  () => import('@solness/hub-cash-register/pages/cash-register-entry'),
  {
    loading: () => <p>loading tada</p>,
  },
);

interface Props {
  date?: string;
}

const Page = ({ date }: Props) => <DynamicPage date={date} />;

export const getServerSideProps = ({ params }: GetServerSidePropsContext) => {
  const date = params?.date as string;
  return { props: { date } };
};

export default Page;
