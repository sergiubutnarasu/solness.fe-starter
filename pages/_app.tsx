import "@solness/ui/build/global/styles/styles.css";
import "@solness/ui/build/global/styles/tailwind.css";
import React from "react";
import { ApiPath } from "~/hub/core";
import { GraphQLProvider } from "~/modules/network";
import { SecurityProvider } from "~/modules/security";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const securityOptions = {
    loginPath: ApiPath.loginPath,
    logoutPath: ApiPath.logoutPath,
    refreshTokenPath: ApiPath.refreshTokenPath,
  };

  return (
    <SecurityProvider {...securityOptions}>
      <GraphQLProvider schemaPath={ApiPath.graphQLSchemaPath}>
        <Component {...pageProps} />
      </GraphQLProvider>
    </SecurityProvider>
  );
}

export default MyApp;
