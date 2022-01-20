import { GetServerSidePropsContext } from 'next';
import dynamic from 'next/dynamic';
import React, { FunctionComponent } from 'react';

const DynamicPage = dynamic(
  () => import('@solness/hub/company-user/pages/company-user'),
  {
    loading: () => <p>loading tada</p>,
  },
);

export interface Props {
  companyUserId: number;
}

const Page: FunctionComponent<Props> = ({ companyUserId }) => (
  <DynamicPage companyUserId={companyUserId} />
);

export const getServerSideProps = ({ params }: GetServerSidePropsContext) => {
  const companyUserId = params?.id as string;
  return { props: { companyUserId: +companyUserId } };
};

export default Page;
