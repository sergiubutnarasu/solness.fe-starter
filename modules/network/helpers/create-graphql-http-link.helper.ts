import { createHttpLink } from "@apollo/client";

export const createGraphQLHttpLink = (schemaPath: string) =>
  createHttpLink({ uri: schemaPath, credentials: "include" });
