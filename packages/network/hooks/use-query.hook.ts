import {
  useQuery as apolloUseQuery,
  DocumentNode,
  OperationVariables,
  QueryHookOptions,
  QueryResult,
  TypedDocumentNode,
} from '@apollo/client';
import { useMemo } from 'react';
import { NetworkStatusCode } from '../config';
import { checkStatusCode } from '../helpers';

export const useQuery = <TData = any, TVariables = OperationVariables>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: QueryHookOptions<TData, TVariables>,
): QueryResult<TData, TVariables> => {
  const { data, error, ...rest } = apolloUseQuery<TData, TVariables>(
    query,
    options,
  );

  const hasUnauthorizedError = useMemo(
    () =>
      error?.graphQLErrors &&
      checkStatusCode(error.graphQLErrors, NetworkStatusCode.UNAUTHORIZED),
    [error],
  );

  if (!data && error && !hasUnauthorizedError) {
    throw error;
  }

  return { data, error, ...rest };
};
