import dynamic from 'next/dynamic';
import React from 'react';

const DynamicPage = dynamic(
  () => import('@solness/hub-profile/pages/profile'),
  {
    loading: () => <p>loading tada</p>,
  },
);

const Page = () => <DynamicPage />;

export default Page;
