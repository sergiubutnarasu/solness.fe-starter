import { AppLayout } from '@solness/hub-layout';
import React from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
