import { GraphQLError } from 'graphql/error';
import { NetworkStatusCode } from '../config';

export const checkStatusCode = (
  errors: readonly GraphQLError[],
  statusCode: NetworkStatusCode,
) =>
  errors.some(
    (error) =>
      error?.extensions?.exception?.status === statusCode ||
      error?.extensions?.response?.statusCode === statusCode,
  );
