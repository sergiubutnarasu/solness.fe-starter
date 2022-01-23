import dynamic from 'next/dynamic';
import React from 'react';

const DynamicPage = dynamic(
  () => import('@solness/hub-company/pages/edit-company'),
  {
    loading: () => <p>loading tada</p>,
  },
);

const Page = () => <DynamicPage />;

export default Page;
