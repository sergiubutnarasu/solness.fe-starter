import dynamic from 'next/dynamic';
import React from 'react';

const DynamicPage = dynamic(
  () => import('@solness/hub/company-user/pages/company-users'),
  {
    loading: () => <p>loading tada</p>,
  },
);

const Page = () => <DynamicPage />;

export default Page;
