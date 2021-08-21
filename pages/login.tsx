import dynamic from 'next/dynamic';
import React from 'react';

const DynamicPage = dynamic(() => import('../modules/hub/auth/pages/login'), {
  loading: () => <p>loading tada</p>,
});

const Page = () => <DynamicPage />;

export default Page;
