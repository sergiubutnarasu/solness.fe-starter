import dynamic from 'next/dynamic';
import React from 'react';
import { HomePage } from '~/hub/home';

const DynamicPage = dynamic(() => import('../modules/hub/home/pages/home'), {
  loading: () => <p>loading tada</p>,
});

const Page = () => <DynamicPage />;

export default Page;
