import { GraphQLError } from 'graphql/error';
import { NetworkStatusCode } from '../config';

export const checkStatusCode = (
  errors: readonly GraphQLError[],
  statusCode: NetworkStatusCode,
) =>
  errors.some(
    ({
      extensions: {
        exception: { status },
      },
    }) => status === statusCode,
  );
