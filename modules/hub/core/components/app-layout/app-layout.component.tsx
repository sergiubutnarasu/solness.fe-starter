import React, { FunctionComponent, useMemo } from "react";
import { GraphQLProvider } from "~/modules/network";
import { SecurityProvider } from "~/modules/security";
import { ApiPath } from "../../configs";
import ErrorBoundary from "../error-boundary";
import HubLayout from "../hub-layout";

const securityOptions = {
  loginPath: ApiPath.loginPath,
  logoutPath: ApiPath.logoutPath,
  refreshTokenPath: ApiPath.refreshTokenPath,
};

const AppLayout: FunctionComponent = ({ children }) => {
  const content = useMemo(() => {
    const isLoginPage = global.window && window.location.pathname === "/login";

    if (isLoginPage) {
      return <>{children}</>;
    }

    return <HubLayout>{children}</HubLayout>;
  }, [children]);

  return (
    <ErrorBoundary>
      <SecurityProvider {...securityOptions}>
        <GraphQLProvider schemaPath={ApiPath.graphQLSchemaPath}>
          {content}
        </GraphQLProvider>
      </SecurityProvider>
    </ErrorBoundary>
  );
};

export default AppLayout;
