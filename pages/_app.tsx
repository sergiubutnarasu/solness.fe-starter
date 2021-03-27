import "@solness/ui/build/global/styles/styles.css";
import "@solness/ui/build/global/styles/tailwind.css";
import React from "react";
import { AppLayout } from "~/hub/core";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
