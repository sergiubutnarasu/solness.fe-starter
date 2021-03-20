import React, { FunctionComponent } from "react";
import HubLayout from "../hub-layout";

const PageLayout: FunctionComponent = ({ children }) => {
  const isLoginPage = global.window && window.location.pathname === "/login";

  if (isLoginPage) {
    return <>{children}</>;
  }

  return <HubLayout>{children}</HubLayout>;
};

export default PageLayout;
