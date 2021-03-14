import AppConfig from "./app.config";

const ApiPath = {
  loginPath: `${AppConfig.apiUrl}/auth/authorize`,
  logoutPath: `${AppConfig.apiUrl}/auth/logout`,
  refreshTokenPath: `${AppConfig.apiUrl}/auth/refresh`,
  graphQLSchemaPath: `${AppConfig.apiUrl}/graphql`,
};

export default ApiPath;
