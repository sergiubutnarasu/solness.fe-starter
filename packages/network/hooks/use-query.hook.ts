import {
  useQuery as apolloUseQuery,
  DocumentNode,
  OperationVariables,
  QueryHookOptions,
  QueryResult,
  TypedDocumentNode,
} from '@apollo/client';

export const useQuery = <TData = any, TVariables = OperationVariables>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: QueryHookOptions<TData, TVariables>,
): QueryResult<TData, TVariables> => {
  const { data, error, ...rest } = apolloUseQuery<TData, TVariables>(
    query,
    options,
  );

  if (!data && error) {
    throw error;
  }

  return { data, error, ...rest };
};
